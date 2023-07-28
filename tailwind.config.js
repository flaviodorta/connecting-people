/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        neutra: ['Neutra', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        archivo: ['Archivo Black', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        neue: ['Neue Montreal', 'sans-serif'],
      },
      colors: {
        primary: '#10b0eb',
        white: '#fafafa',
        secondary: '#2146e4',
        black: '#202020',
      },
      backgroundSize: {
        custom: '200%',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right, #10b0eb 0%, #2146e4)',
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
