module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { 
      md: { max: "1050px" }, 
      sm: { max: "550px" },
      // xs: "480px",
      // ss: "620px",
      // sm: "768px",
      // md: "1060px",
      // lg: "1200px",
      // xl: "1700px",
    
    },
    extend: {
      colors: {
        gray_300_87: "#e6e6e687",
        red_900: "#c71a1a",
        gray_800: "#3d3d3d",
        gray_900: "#1e1e1e",
        light_blue_500: "#00acee",
        red_900_01: "#9c1414",
        gray_300: "#e6e6e6",
        gray_300_01: "#e3e3e3",
        gray_900_19: "#15091f19",
        gray_100: "#f4f4f4",
        deep_purple_50: "#eeeaf2",
        black_900_01: "#0b0c0f",
        white_A700_63: "#ffffff63",
        black_900_99: "#0b0c0f99",
        black_900: "#000000",
        gray_900_63: "#1e1e1e63",
        white_A700: "#ffffff",
        black_900_02: "#08040c",
        gray_300_a2: "#e6e6e6a2",
        border_color: "#ffffff" ,
      },
     
      backgroundImage: {
        'red-gradient': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(156,20,20,1) 80%)',
        'black-gradient': 'linear-gradient(144.39deg,#ffffff -278.56%,#000 -78.47%, #9c1414 91.61% )',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        bs: "0px 8px  40px 0px #000000",
        bs1: "0px 5.13px  5px 0px #15091f19",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
