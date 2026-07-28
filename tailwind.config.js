/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        ink: {
          900: 'var(--ink-900)',
          700: 'var(--ink-700)',
          500: 'var(--ink-500)',
          400: 'var(--ink-400)',
          300: 'var(--ink-300)',
          200: 'var(--ink-200)',
        },
        accent: {
          ui: 'var(--accent-ui)',
          text: 'var(--accent-text)',
          tint: 'var(--accent-tint)',
          ring: 'var(--accent-ring)',
        },
        surface: {
          page: 'var(--surface-page)',
          subtle: 'var(--surface-subtle)',
          ink: 'var(--surface-ink)',
        },
        line: {
          strong: 'var(--border-strong)',
          DEFAULT: 'var(--border-default)',
          soft: 'var(--border-soft)',
          faint: 'var(--border-faint)',
        },
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        info: 'var(--info)',
      },
      borderRadius: {
        sm: '12px',
        md: '14px',
        lg: '20px',
        xl: '24px',
        pill: '999px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        float: 'var(--shadow-float)',
        nav: 'var(--shadow-nav)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
