module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: 'media',
  theme: {
    screens: {
      'xs': '250px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    minHeight: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        'gray': '#5C7363',
        'light-purple': '#cb90de',
        'purple': '#6b32a6',
        'light-green': '#7ed957',
        'green': '#32a657',
      },
      backgroundImage: {
        'custom-bg': 'linear-gradient(to right, #7ed957, #32a657, #cb90de)',

      },
      backgroundColor: {
        'gray-bg': '#5C7363',
        'light-purple': '#cb90de',
        'purple': '#6b32a6',
      },
      textColor: {
        'black': '#000000',
        'gray': '#5C7363',
        'light-purple': '#cb90de',
        'purple': '#6b32a6',
      },
      borderColor: {
        'black': '#000000',
        'gray': '#5C7363',
        'light-purple': '#cb90de',
        'purple': '#6b32a6',
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};
