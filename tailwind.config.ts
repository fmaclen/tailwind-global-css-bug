import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['selector', '[data-color-theme="dark"]'],
  theme: {
    extend: {}
  },

  plugins: []
} satisfies Config;
