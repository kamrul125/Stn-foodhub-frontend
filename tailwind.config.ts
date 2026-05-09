import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // 🔥 only src
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;