/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        background: '#f8f5f0',
        foreground: '#3e2723',
        primary: {
          DEFAULT: '#2e7d32',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#e8f5e9',
          foreground: '#1b5e20',
        },
        accent: {
          DEFAULT: '#c8e6c9',
          foreground: '#1b5e20',
        },
        muted: {
          DEFAULT: '#f0e9e0',
          foreground: '#6d4c41',
        },
        card: {
          DEFAULT: '#f8f5f0',
          foreground: '#3e2723',
        },
        popover: {
          DEFAULT: '#f8f5f0',
          foreground: '#3e2723',
        },
        border: '#e0d6c9',
        input: '#e0d6c9',
        ring: '#2e7d32',
        destructive: {
          DEFAULT: '#c62828',
          foreground: '#ffffff',
        },
        chart: {
          1: '#4caf50',
          2: '#388e3c',
          3: '#2e7d32',
          4: '#1b5e20',
          5: '#0a1f0c',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
}