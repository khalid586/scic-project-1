/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
    // 'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
        fontFamily: {
          'custom': ['Manrope'], // Define your custom font family
        },
        
      },
    },
    plugins: [
      require('daisyui'),
    function({ addUtilities }) {
      const newUtilities = {
        // '.btn': {
        //   padding: '.5rem 1rem',
        //   borderRadius: '15px',
        //   fontWeight: '600',
        //   cursor: 'pointer',
        //   display: 'inline-block',
        //   color: '#fff',
        //   backgroundColor: '#0BE58A',
        //   transition: 'background-color 0.3s ease',
        // },
        '.btn2': {
          padding: '.5rem 1rem',
          borderRadius: '15px',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'inline-block',
          color: '#fff',
          backgroundColor: 'red',
          transition: 'background-color 0.3s ease',
        },
        // '.btn:hover': {
        //   backgroundColor: '#357cd6',
        //   color:'white'
        // },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

