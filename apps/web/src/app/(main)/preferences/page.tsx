'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, ArrowLeft, Loader2, Save, Check } from 'lucide-react';
import { api, UserPreferences, City, Neighborhood } from '@/lib/api';

export default function PreferencesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [prefs, citiesData] = await Promise.all([
          api.getPreferences(),
          api.getCities(),
        ]);
        setPreferences(prefs);
        setCities(citiesData);

        if (prefs?.location.targetCityId) {
          const hoods = await api.getNeighborhoods(prefs.location.targetCityId);
          setNeighborhoods(hoods);
        }
      } catch {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [router]);

  useEffect(() => {
    if (preferences?.location.targetCityId) {
      api.getNeighborhoods(preferences.location.targetCityId)
        .then(setNeighborhoods)
        .catch(console.error);
    } else {
      setNeighborhoods([]);
    }
  }, [preferences?.location.targetCityId]);

  const handleSave = async () => {
    if (!preferences) return;

    setSaving(true);
    try {
      await api.updatePreferences({
        family: preferences.family,
        budget: preferences.budget,
        location: preferences.location,
        lifestyle: preferences.lifestyle,
        amenities: preferences.amenities,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (error) {
      console.error('Failed to save preferences:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading || !preferences) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-nin-500" />
      </div>
    );
  }

  const updatePrefs = (section: Exclude<keyof UserPreferences, 'id'>, key: string, value: unknown) => {
    if (!preferences) return;

    setPreferences({
      ...preferences,
      [section]: {
        ...preferences[section],
        [key]: value,
      },
    });
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-nin-600 hover:text-nin-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao dashboard
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-nin-500 rounded-full flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold text-nin-900">
              Preferências
            </h1>
            <p className="text-nin-600">Ajuste suas preferências de busca</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Family */}
          <section className="card">
            <h2 className="font-heading text-lg font-semibold text-nin-900 mb-4">
              Família
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Adultos</label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={preferences.family.adultsCount}
                    onChange={(e) => updatePrefs('family', 'adultsCount', Number(e.target.value))}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Crianças</label>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={preferences.family.childrenCount}
                    onChange={(e) => updatePrefs('family', 'childrenCount', Number(e.target.value))}
                    className="input"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Quartos (mín)</label>
                  <input
                    type="number"
                    min={0}
                    value={preferences.family.minBedrooms}
                    onChange={(e) => updatePrefs('family', 'minBedrooms', Number(e.target.value))}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Banheiros (mín)</label>
                  <input
                    type="number"
                    min={0}
                    value={preferences.family.minBathrooms}
                    onChange={(e) => updatePrefs('family', 'minBathrooms', Number(e.target.value))}
                    className="input"
                  />
                </div>
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.family.hasPets}
                  onChange={(e) => updatePrefs('family', 'hasPets', e.target.checked)}
                  className="w-5 h-5 rounded border-nin-300 text-nin-500"
                />
                <span className="text-nin-700">Tenho pets</span>
              </label>
            </div>
          </section>

          {/* Budget */}
          <section className="card">
            <h2 className="font-heading text-lg font-semibold text-nin-900 mb-4">
              Orçamento
            </h2>
            <div className="space-y-4">
              <div>
                <label className="label">Tipo de transação</label>
                <div className="flex gap-4">
                  {(['RENT', 'BUY'] as const).map((type) => (
                    <label
                      key={type}
                      className={`flex-1 p-3 rounded-nin-sm border-2 cursor-pointer text-center ${preferences.budget.transactionType === type
                          ? 'border-nin-500 bg-nin-50'
                          : 'border-nin-200'
                        }`}
                    >
                      <input
                        type="radio"
                        checked={preferences.budget.transactionType === type}
                        onChange={() => updatePrefs('budget', 'transactionType', type)}
                        className="sr-only"
                      />
                      {type === 'RENT' ? 'Alugar' : 'Comprar'}
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Mínimo (R$)</label>
                  <input
                    type="number"
                    min={0}
                    value={preferences.budget.minPrice || ''}
                    onChange={(e) => updatePrefs('budget', 'minPrice', Number(e.target.value) || null)}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Máximo (R$)</label>
                  <input
                    type="number"
                    min={0}
                    value={preferences.budget.maxPrice || ''}
                    onChange={(e) => updatePrefs('budget', 'maxPrice', Number(e.target.value) || null)}
                    className="input"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="card">
            <h2 className="font-heading text-lg font-semibold text-nin-900 mb-4">
              Localização
            </h2>
            <div className="space-y-4">
              <div>
                <label className="label">Cidade</label>
                <select
                  value={preferences.location.targetCityId || ''}
                  onChange={(e) => {
                    setPreferences({
                      ...preferences,
                      location: {
                        ...preferences.location,
                        targetCityId: e.target.value || null,
                        preferredNeighborhoodIds: [],
                      },
                    });
                  }}
                  className="input"
                >
                  <option value="">Qualquer cidade</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}, {city.state}
                    </option>
                  ))}
                </select>
              </div>
              {neighborhoods.length > 0 && (
                <div>
                  <label className="label">Bairros preferidos</label>
                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                    {neighborhoods.map((n) => (
                      <label
                        key={n.id}
                        className={`flex items-center gap-2 p-2 rounded-nin-sm border-2 cursor-pointer text-sm ${preferences.location.preferredNeighborhoodIds.includes(n.id)
                            ? 'border-nin-500 bg-nin-50'
                            : 'border-nin-200'
                          }`}
                      >
                        <input
                          type="checkbox"
                          checked={preferences.location.preferredNeighborhoodIds.includes(n.id)}
                          onChange={(e) => {
                            const ids = preferences.location.preferredNeighborhoodIds;
                            const updated = e.target.checked
                              ? [...ids, n.id]
                              : ids.filter((id) => id !== n.id);
                            setPreferences({
                              ...preferences,
                              location: {
                                ...preferences.location,
                                preferredNeighborhoodIds: updated,
                              },
                            });
                          }}
                          className="sr-only"
                        />
                        {n.name}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Lifestyle */}
          <section className="card">
            <h2 className="font-heading text-lg font-semibold text-nin-900 mb-4">
              Estilo de vida
            </h2>
            <div className="space-y-4">
              {[
                { key: 'quietnessWeight', label: 'Tranquilidade' },
                { key: 'schoolProximityWeight', label: 'Perto de escolas' },
                { key: 'hospitalProximityWeight', label: 'Perto de hospitais' },
                { key: 'commerceProximityWeight', label: 'Comércio/Serviços próximos' },
                { key: 'safetyWeight', label: 'Segurança do bairro' },
                { key: 'publicTransportWeight', label: 'Transporte público' },
              ].map(({ key, label }) => (
                <div key={key}>
                  <div className="flex justify-between mb-1">
                    <label className="label mb-0">{label}</label>
                    <span className="text-nin-500 font-medium">
                      {preferences.lifestyle[key as keyof typeof preferences.lifestyle]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={preferences.lifestyle[key as keyof typeof preferences.lifestyle]}
                    onChange={(e) => updatePrefs('lifestyle', key, Number(e.target.value))}
                    className="slider"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Amenities */}
          <section className="card">
            <h2 className="font-heading text-lg font-semibold text-nin-900 mb-4">
              Comodidades
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'needsParking', label: 'Garagem' },
                { key: 'needsGarden', label: 'Jardim' },
                { key: 'needsPool', label: 'Piscina' },
                { key: 'needsSecurity', label: 'Segurança 24h' },
              ].map(({ key, label }) => (
                <label
                  key={key}
                  className={`flex items-center gap-2 p-3 rounded-nin-sm border-2 cursor-pointer ${preferences.amenities[key as keyof typeof preferences.amenities]
                      ? 'border-nin-500 bg-nin-50'
                      : 'border-nin-200'
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={preferences.amenities[key as keyof typeof preferences.amenities]}
                    onChange={(e) => updatePrefs('amenities', key, e.target.checked)}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
            </div>
          </section>

          {/* Save button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn btn-primary w-full"
          >
            {saving ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : saved ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                Salvo!
              </>
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Salvar preferências
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
