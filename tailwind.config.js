// Tailwind config for custom theme
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.css',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4f46e5',    // indigo-600
          light: '#a5b4fc',   // indigo-300
        },
        accent: '#f59e42', // orange-400
      },
      boxShadow: {
        soft: '0 2px 8px 0 rgba(99, 102, 241, 0.08)',
      },
    },
  },
  plugins: [],
};
