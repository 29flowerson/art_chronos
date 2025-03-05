/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{ 
        "my-gray":"#777", 
        "my-bege":"#fdf6ec", 
        "my-brown":"#222222", 
      },
      spacing:{
        "1":"16px",
        "2":"32px",
        "3":"64px",
        "4":"180px",
        "5":"250px",
        "6":"400px",
        "7":"550px",
        "8":"710px",
      },
      sizing:{ 
        "1":"16px", 
        "2":"32px", 
        "3":"72px", 
        "4":"195px", 
        "5":"230px", 
        "6":"400px", 
        "7":"550px", 
        "8":"710px", 
        "9":"800px", 
 
 
      },

    },
  },
  plugins: [],
};
