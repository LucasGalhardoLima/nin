export const cleanDescriptionForSource = (text: string, source: string): string => {
  const trimmed = text.trim();
  if (!trimmed) return '';
  const normalizedSource = source.trim().toLowerCase();

  const baseNoise = [
    /central de neg[oó]cios/i,
    /fale agora/i,
    /whatsapp/i,
    /contato/i,
    /corretor/i,
    /imobili[aá]ria/i,
    /creci/i,
    /repita/i,
    /ligue/i,
    /telefone/i,
    /fone/i,
    /zap/i,
  ];

  const sourceNoise: Record<string, RegExp[]> = {
    thiagofavaro: [
      /thiago favaro/i,
      /central de neg[oó]cios/i,
    ],
    chavesnamao: [
      /veja mais/i,
      /clique aqui/i,
      /acesse/i,
    ],
    cardinali: [
      /cardinali/i,
      /fale com/i,
    ],
  };

  const phonePattern = /(\+?55)?\s*\(?\d{2}\)?\s*\d{4,5}[-\s]?\d{4}/;
  const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

  const lines = trimmed
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !phonePattern.test(line))
    .filter((line) => !emailPattern.test(line))
    .filter((line) => !baseNoise.some((pattern) => pattern.test(line)))
    .filter((line) => !(sourceNoise[normalizedSource]?.some((pattern) => pattern.test(line)) ?? false))
    .filter((line) => !/^\d{3,}$/.test(line));

  return lines.join('\n').replace(/\s+/g, ' ').trim();
};
