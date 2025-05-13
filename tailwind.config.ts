import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        logo: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
