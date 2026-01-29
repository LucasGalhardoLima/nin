'use client';

interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export function WaveDivider({ topColor, bottomColor, flip = false }: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}
      style={{ marginTop: '-1px', marginBottom: '-1px' }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] md:h-[80px]"
        style={{ transform: 'scale(1.01)' }}
      >
        <path
          d="M0,0 C300,100 900,20 1200,80 L1200,120 L0,120 Z"
          fill={bottomColor}
        />
        <rect x="0" y="0" width="1200" height="2" fill={topColor} />
      </svg>
      <div
        className="absolute inset-0 top-0 h-1"
        style={{ backgroundColor: topColor }}
      />
    </div>
  );
}
