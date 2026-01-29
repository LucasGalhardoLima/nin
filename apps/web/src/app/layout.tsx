import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nin. - Encontre seu ninho perfeito',
  description: 'Plataforma de matching imobiliário para Matão e Araraquara, SP. Encontre o imóvel ideal baseado no seu estilo de vida.',
  keywords: ['imóveis', 'aluguel', 'compra', 'Matão', 'Araraquara', 'SP', 'matching'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
