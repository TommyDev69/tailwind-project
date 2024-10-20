/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '360px',    // Custom extra-small breakpoint
        'sm': '640px',    // Default small breakpoint (mobile)
        'md': '768px',    // Default medium breakpoint (tablet)
        'lg': '1024px',   // Default large breakpoint (laptop)
        'xl': '1280px',   // Default extra-large breakpoint (large desktop)
        '2xl': '1536px',  // Default 2x-large breakpoint (large monitor)
        // Custom breakpoint
        '3xl': '1600px'   // Custom large breakpoint for very wide screens
      },
    },
  },
  plugins: [],
}