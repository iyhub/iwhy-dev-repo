import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

// Generated color palettes
const accent = { 200: '#aad7a0', 600: '#165800', 900: '#0d3e00', 950: '#072d00' };
const gray = { 100: '#f4f7f3', 200: '#eaf0e8', 300: '#bdc4bb', 400: '#82907f', 500: '#4f5c4d', 700: '#303c2d', 800: '#1f2a1c', 900: '#151a13' };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        base: ['1.1rem', '1.75rem'], // 保持这个设置
      },
      colors: { accent, gray },
      fontFamily: {
		sans: ['Ubuntu', 'sans-serif'],
		mono: ['Ubuntu Mono', 'monospace'],
		weikai: ['weikai', 'sans-serif'],
	  },
    },
  },
  plugins: [starlightPlugin()],
};