const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
  "c1121f",
  "e5e5e5"
];

module.exports = {
    
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",],
    //Because we made a dynamic class with the label we need to add those clases
    // to the safe list so the purge does not remove that
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-300`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-400`),
      ...labelsClasses.map((lbl) => `text-${lbl}-700`),
      ...labelsClasses.map((lbl) => `text-${lbl}-600`),

    ],
  darkMode: false, 
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}