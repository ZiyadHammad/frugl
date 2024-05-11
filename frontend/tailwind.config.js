/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1400px',
    },
    extend: {
      backgroundImage: {
        "custom-1": "linear-gradient(to bottom, #3e4b6d, #222151)",
        "custom-2": "linear-gradient(to bottom, #913dff, #7733f4)",
      },
      colors: {
        theme: "#f9f9fb",
        primary: "#222151",
        secondary: "#913dff",
        body: '#686a9e'
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      fontWeight: {
        "1": "100",
        "2": "200",
        "3": "300",
        "4": "400",
        "5": "500",
        "6": "600",
        "7": "700",
      },
      maxWidth: {
        "10xl": "1400px",
      },
      boxShadow: {
        'custom': "0 1px 0 .5px #f9f9fb ,0 4px 12px 0 rgba(34,33,81,.12)",
        "custom-1": "0 1px 0 1px #222151,0 8px 12px 0 rgba(34,33,81,.25)",
        "custom-2": "0 1px 0 1px #6327d3,0 8px 12px rgba(34,33,81,.25)",
      },
      borderRadius: {
        "10": "10px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

