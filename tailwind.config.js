const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2AE7',
        },
        light: '#ffffff',
        gray: '#ECEFF1',
        success: '#14A81C',
      },
    },
  },
  plugins: [],
});
