import type { Config } from "tailwindcss";


export default {
  darkMode: "selector",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ['"JetBrains Mono"', "monospace"],
    },
    extend: {
      animation: {
        fade: "fade 1.5s ease-in-out infinite",
        "slow-spin": "spin 2s linear infinite",
      },
      colors: {
        gray: {
          0: "var(--color-gray-0)",
          "0/20": "var(--color-gray-0-20)", // fix via rgb values later
          150: "var(--color-gray-150)",
          200: "var(--color-gray-200)",
          250: "var(--color-gray-250)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          810: "var(--color-gray-810)",
          825: "var(--color-gray-825)",
          850: "var(--color-gray-850)",
          900: "var(--color-gray-900)",
          1000: "var(--color-gray-1000)",
          "1000/10": "var(--color-gray-1000-10)", // fix via rgb values later
        },

        blue: {
          50: "var(--color-blue-50)",
          100: "var(--color-blue-100)",
          "100/50": "var(--color-blue-100-50)",
        },
        red: {
          100: "var(--color-red-100)",
        },
        green: {
          50: "var(--color-green-50)",
          100: "var(--color-green-100)",
        },
        surface: {
          default: {
            primary: "var(--color-surface-default-primary)",
            secondary: "var(--color-surface-default-secondary)",
            tertiary: "var(--color-surface-default-tertiary)",
            4: "var(--color-surface-default-4)",
            5: "var(--color-gray-810)", // not a token in Figma, need to fix up
          },
          brand: {
            primary: "var(--color-surface-brand-primary)",
            secondary: "var(--color-surface-brand-secondary)",
            tertiary: "var(--color-surface-brand-tertiary)",
          },
          alert: {
            primary: "var(--color-surface-alert-primary)",
            secondary: "var(--color-surface-alert-secondary)",
            tertiary: "var(--color-surface-alert-tertiary)",
          },
          affirmative: "var(--color-surface-affirmative-primary)",
        },
        typography: {
          default: {
            primary: "var(--color-typography-default-primary)",
            secondary: "var(--color-typography-default-secondary)",
          },
        },
        border: {
          default: {
            primary: "var(--color-border-default-primary)",
            secondary: "var(--color-border-default-secondary)",
          },
          brand: {
            primary: "var(--color-border-brand-primary)",
          },
          toolbar: {
            default: "var(--color-border-toolbar-default)",
          },
        },
        button: {
          typography: {
            primary: "var(--color-button-typography-primary)",
          },
          surface: {
            secondary: {
              hover: "var(--color-button-surface-secondary-hover)",
            },
          },
        },
        primary: {
          DEFAULT: `rgb(var(--color-primary))`,
          50: "#DBD7E6",
          100: "#D0CADE",
          200: "#B9B1CF",
          300: "#A397BF",
          400: "#8C7EB0",
          500: "#7665A0",
          600: "#5C4E7F",
          700: "#43395C",
          800: "#2A2339",
          900: "#100E17",
          950: "#040305",
        },
        destructive: "rgb(239 68 68)",
        white: "#f9f9f9",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),

  ],
} satisfies Config;
