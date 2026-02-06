'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { api } from '@/lib/api';

type PropertyActionsProps = {
  propertyId: string;
  initialIsSaved?: boolean;
};

export default function PropertyActions({ propertyId, initialIsSaved = false }: PropertyActionsProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(initialIsSaved);
  const [checkingStatus, setCheckingStatus] = useState(false);

  useEffect(() => {
    let isActive = true;
    const loadStatus = async () => {
      if (!api.getToken()) return;
      if (initialIsSaved) return;
      setCheckingStatus(true);
      try {
        const status = await api.getMatchStatus(propertyId);
        if (!isActive) return;
        setSaved(status.isFavorite);
      } catch {
        // Ignore status errors; keep optimistic local state.
      } finally {
        if (isActive) setCheckingStatus(false);
      }
    };

    loadStatus();
    return () => {
      isActive = false;
    };
  }, [propertyId, initialIsSaved]);

  const handleSave = async () => {
    if (!api.getToken()) {
      router.push('/register');
      return;
    }
    setSaving(true);
    try {
      await api.saveMatch(propertyId);
      setSaved(true);
    } catch (error) {
      console.error('Failed to save property:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="card">
      <h2 className="font-heading text-lg font-semibold text-nin-900 mb-2">
        Pronto para agir?
      </h2>
      <p className="text-nin-600 text-sm mb-4">
        Salve este imóvel e acompanhe atualizações direto no Nin.
      </p>
      <button
        onClick={handleSave}
        disabled={saving || saved || checkingStatus}
        className="btn btn-primary w-full"
      >
        <Heart className={`w-4 h-4 mr-2 ${saved ? 'fill-current' : ''}`} />
        {saved ? 'Salvo' : saving ? 'Salvando...' : checkingStatus ? 'Verificando...' : 'Salvar imóvel'}
      </button>
    </div>
  );
}
