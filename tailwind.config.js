/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage:{
        "leaf-bg" : "url('/img/botanical-leaves_23-2148121721.jpg')",
        "leaf-bg-two":"url('img/1323467.png')",
        "leaf-bg-http":"url('https://images4.alphacoders.com/132/1323467.png')"
      }
    },
  },
  plugins: [],
}

