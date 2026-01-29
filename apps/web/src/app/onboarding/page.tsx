'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  MapPin,
  Heart,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Check,
  Plus,
  Minus,
} from 'lucide-react';
import { api, City } from '@/lib/api';

const STEPS = [
  { id: 'essentials', title: 'Essenciais', icon: MapPin },
  { id: 'space', title: 'Espaço & Família', icon: Home },
  { id: 'lifestyle', title: 'Estilo de Vida', icon: Heart },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<City[]>([]);

  const [formData, setFormData] = useState({
    // Step 1 — Essenciais
    targetCityId: '',
    transactionType: 'RENT' as 'RENT' | 'BUY',
    minPrice: 0,
    maxPrice: 3000,
    // Step 2 — Espaço & Família
    minBedrooms: 2,
    minBathrooms: 1,
    adultsCount: 1,
    childrenCount: 0,
    hasPets: false,
    // Step 3 — Estilo de Vida
    quietnessWeight: 5,
    schoolProximityWeight: 5,
    hospitalProximityWeight: 5,
    commerceProximityWeight: 5,
    safetyWeight: 5,
    publicTransportWeight: 5,
  });

  useEffect(() => {
    api.getCities().then(setCities).catch(console.error);
  }, []);

  const isStep1Valid = formData.targetCityId !== '';

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const preferences = {
        location: {
          targetCityId: formData.targetCityId || undefined,
        },
        budget: {
          transactionType: formData.transactionType,
          minPrice: formData.minPrice || undefined,
          maxPrice: formData.maxPrice || undefined,
        },
        family: {
          adultsCount: formData.adultsCount,
          childrenCount: formData.childrenCount,
          minBedrooms: formData.minBedrooms,
          minBathrooms: formData.minBathrooms,
          hasPets: formData.hasPets,
        },
        lifestyle: {
          quietnessWeight: formData.quietnessWeight,
          schoolProximityWeight: formData.schoolProximityWeight,
          hospitalProximityWeight: formData.hospitalProximityWeight,
          commerceProximityWeight: formData.commerceProximityWeight,
          safetyWeight: formData.safetyWeight,
          publicTransportWeight: formData.publicTransportWeight,
        },
      };

      if (api.getToken()) {
        await api.updatePreferences(preferences);
      } else {
        api.setGuestPreferences(preferences);
      }
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to save preferences:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSkipLifestyle = async () => {
    setFormData((prev) => ({
      ...prev,
      quietnessWeight: 5,
      schoolProximityWeight: 5,
      hospitalProximityWeight: 5,
      commerceProximityWeight: 5,
      safetyWeight: 5,
      publicTransportWeight: 5,
    }));
    await handleSubmit();
  };

  const canProceed = step === 0 ? isStep1Valid : true;

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-nin-500 rounded-full flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold text-nin-900">
              Configure seu perfil
            </h1>
            <p className="text-nin-600">
              Passo {step + 1} de {STEPS.length}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-colors ${
                i <= step ? 'bg-nin-500' : 'bg-nin-200'
              }`}
            />
          ))}
        </div>

        {/* Step indicators */}
        <div className="flex justify-between mb-8">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`flex flex-col items-center gap-2 ${
                  i === step
                    ? 'text-nin-500'
                    : i < step
                    ? 'text-sage-500'
                    : 'text-nin-300'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    i === step
                      ? 'bg-nin-500 text-white'
                      : i < step
                      ? 'bg-sage-500 text-white'
                      : 'bg-nin-100'
                  }`}
                >
                  {i < step ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <span className="text-xs font-medium hidden sm:block">
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Card with animated steps */}
        <div className="card overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <h2 className="font-heading text-xl font-semibold text-nin-900 mb-6">
                {STEPS[step].title}
              </h2>

              {step === 0 && (
                <EssentialsStep
                  formData={formData}
                  setFormData={setFormData}
                  cities={cities}
                />
              )}
              {step === 1 && (
                <SpaceFamilyStep
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
              {step === 2 && (
                <LifestyleStep
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-nin-100">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="btn btn-secondary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </button>

            <div className="flex gap-3">
              {step === 2 && (
                <button
                  onClick={handleSkipLifestyle}
                  disabled={loading}
                  className="btn btn-secondary"
                >
                  Pular esta etapa
                </button>
              )}

              {step < STEPS.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="btn btn-primary"
                >
                  Próximo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Encontrar meu ninho
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ——— Step 1: Essenciais (Location + Budget) ———

function EssentialsStep({ formData, setFormData, cities }: EssentialsStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="label">Cidade</label>
        <select
          value={formData.targetCityId}
          onChange={(e) =>
            setFormData({ ...formData, targetCityId: e.target.value })
          }
          className="input"
        >
          <option value="">Selecione uma cidade</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}, {city.state}
            </option>
          ))}
        </select>
        {formData.targetCityId === '' && (
          <p className="text-xs text-red-500 mt-1">Selecione uma cidade para continuar</p>
        )}
      </div>

      <div>
        <label className="label">Tipo de transação</label>
        <div className="flex gap-4">
          {(['RENT', 'BUY'] as const).map((type) => (
            <label
              key={type}
              className={`flex-1 p-4 rounded-nin-sm border-2 cursor-pointer transition-colors text-center ${
                formData.transactionType === type
                  ? 'border-nin-500 bg-nin-50'
                  : 'border-nin-200 hover:border-nin-300'
              }`}
            >
              <input
                type="radio"
                name="transactionType"
                value={type}
                checked={formData.transactionType === type}
                onChange={() =>
                  setFormData({ ...formData, transactionType: type })
                }
                className="sr-only"
              />
              <span className="font-medium text-nin-700">
                {type === 'RENT' ? 'Alugar' : 'Comprar'}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label">
            {formData.transactionType === 'RENT'
              ? 'Aluguel mínimo (R$)'
              : 'Preço mínimo (R$)'}
          </label>
          <input
            type="number"
            min={0}
            value={formData.minPrice}
            onChange={(e) =>
              setFormData({ ...formData, minPrice: Number(e.target.value) })
            }
            className="input"
          />
        </div>
        <div>
          <label className="label">
            {formData.transactionType === 'RENT'
              ? 'Aluguel máximo (R$)'
              : 'Preço máximo (R$)'}
          </label>
          <input
            type="number"
            min={0}
            value={formData.maxPrice}
            onChange={(e) =>
              setFormData({ ...formData, maxPrice: Number(e.target.value) })
            }
            className="input"
          />
        </div>
      </div>
    </div>
  );
}

// ——— Step 2: Espaço & Família ———

function CounterField({
  label,
  value,
  min,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-nin-700 font-medium">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-9 h-9 rounded-full border-2 border-nin-200 flex items-center justify-center text-nin-600 hover:border-nin-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-semibold text-nin-900 text-lg">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-9 h-9 rounded-full border-2 border-nin-200 flex items-center justify-center text-nin-600 hover:border-nin-400 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function SpaceFamilyStep({ formData, setFormData }: FormStepProps) {
  return (
    <div className="space-y-5">
      <CounterField
        label="Quartos"
        value={formData.minBedrooms}
        min={0}
        onChange={(v) => setFormData({ ...formData, minBedrooms: v })}
      />
      <CounterField
        label="Banheiros"
        value={formData.minBathrooms}
        min={0}
        onChange={(v) => setFormData({ ...formData, minBathrooms: v })}
      />

      <div className="border-t border-nin-100 pt-5" />

      <CounterField
        label="Adultos"
        value={formData.adultsCount}
        min={1}
        onChange={(v) => setFormData({ ...formData, adultsCount: v })}
      />
      <CounterField
        label="Crianças"
        value={formData.childrenCount}
        min={0}
        onChange={(v) => setFormData({ ...formData, childrenCount: v })}
      />

      <div className="border-t border-nin-100 pt-5" />

      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-nin-700 font-medium">Tenho pets</span>
        <div
          className={`relative w-12 h-7 rounded-full transition-colors ${
            formData.hasPets ? 'bg-nin-500' : 'bg-nin-200'
          }`}
          onClick={() => setFormData({ ...formData, hasPets: !formData.hasPets })}
        >
          <div
            className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${
              formData.hasPets ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </div>
      </label>
    </div>
  );
}

// ——— Step 3: Estilo de Vida ———

function LifestyleStep({ formData, setFormData }: FormStepProps) {
  const sliders = [
    { key: 'schoolProximityWeight' as const, label: 'Proximidade de escolas' },
    { key: 'hospitalProximityWeight' as const, label: 'Proximidade de hospitais' },
    { key: 'publicTransportWeight' as const, label: 'Transporte público' },
    { key: 'safetyWeight' as const, label: 'Segurança do bairro' },
    { key: 'quietnessWeight' as const, label: 'Tranquilidade' },
    { key: 'commerceProximityWeight' as const, label: 'Comércio/Serviços próximos' },
  ];

  return (
    <div className="space-y-6">
      <p className="text-nin-600 text-sm">
        Arraste para indicar a importância (1 = pouco, 10 = muito)
      </p>
      {sliders.map(({ key, label }) => (
        <div key={key}>
          <div className="flex justify-between mb-2">
            <label className="label mb-0">{label}</label>
            <span className="text-nin-500 font-semibold">{formData[key]}</span>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            value={formData[key]}
            onChange={(e) =>
              setFormData({ ...formData, [key]: Number(e.target.value) })
            }
            className="slider"
          />
        </div>
      ))}
    </div>
  );
}

// ——— Types ———

interface FormData {
  targetCityId: string;
  transactionType: 'RENT' | 'BUY';
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
  minBathrooms: number;
  adultsCount: number;
  childrenCount: number;
  hasPets: boolean;
  quietnessWeight: number;
  schoolProximityWeight: number;
  hospitalProximityWeight: number;
  commerceProximityWeight: number;
  safetyWeight: number;
  publicTransportWeight: number;
}

interface FormStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

interface EssentialsStepProps extends FormStepProps {
  cities: City[];
}
