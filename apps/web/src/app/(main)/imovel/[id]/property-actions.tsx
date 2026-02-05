'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { api } from '@/lib/api';

export default function PropertyActions({ propertyId }: { propertyId: string }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

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
        disabled={saving || saved}
        className="btn btn-primary w-full"
      >
        <Heart className={`w-4 h-4 mr-2 ${saved ? 'fill-current' : ''}`} />
        {saved ? 'Salvo' : saving ? 'Salvando...' : 'Salvar imóvel'}
      </button>
    </div>
  );
}
