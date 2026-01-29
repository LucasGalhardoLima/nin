import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Warm Browns (Nest/Wood)
        nin: {
          50: '#FDF6EF',
          100: '#FAE8D8',
          200: '#F5D0B0',
          300: '#EDB37F',
          400: '#E28E4C',
          500: '#A76D5D', // Terracotta accent
          600: '#8B5A4A',
          700: '#6F473A',
          800: '#573831',
          900: '#3D2314', // Deep bark (text)
        },
        // Accent - Golden Honey
        honey: {
          50: '#FEF9F0',
          100: '#FCF0DB',
          200: '#F9DFB5',
          300: '#F4C985',
          400: '#EDAE52',
          500: '#D89F6A', // Golden honey
          600: '#C18540',
          700: '#A16A33',
          800: '#82542B',
          900: '#6A4526',
        },
        // Secondary - Soft Greens (Nature)
        sage: {
          50: '#F4F8F3',
          100: '#E5EFE3',
          200: '#CBDFC8',
          300: '#A6C8A0',
          400: '#7BAD73',
          500: '#6B9B64', // Sage green
          600: '#537D4D',
          700: '#43633E',
          800: '#374F33',
          900: '#2D412B',
        },
        // Match score colors
        match: {
          excellent: '#4A7C42', // 90-100
          good: '#6B9B64', // 70-89
          fair: '#D89F6A', // 50-69
          low: '#B94A48', // 0-49
        },
      },
      fontFamily: {
        heading: ['DM Serif Display', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'nin': '1.5rem',
        'nin-sm': '1rem',
        'nin-lg': '2rem',
      },
      boxShadow: {
        'nin': '0 4px 20px rgba(61, 35, 20, 0.08)',
        'nin-lg': '0 8px 30px rgba(61, 35, 20, 0.12)',
        'nin-hover': '0 6px 25px rgba(61, 35, 20, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
