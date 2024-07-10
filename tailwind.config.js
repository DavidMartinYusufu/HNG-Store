/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'myColor': '#C1EFDA',
      'grey' : '#F3F3F3',
      'white': '#ffffff',
      'herobtn' : '#EBFAF3',
      'right'  : '#38CB89',
      'featurebtn' : '#000D07',
      'greyBox' : '#EEEEEE',
      'firstGreen' : '#1F704B',
      'categorybtn' : '#545D59',
      'black' : '#000000',
      'subscribe' : '#000D07',
      'palewhite' : '#FBFBFB',
      'line' : '#333D39',
      'checkgreen' : '#45B26B',
      'herobtn2' : '#D9D9D9',
      'grey2' : '#8C8C8C',
      'footergreen' : '#A3E7C9'
      
     },
    backgroundImage: {
      'image': "url('./src/assets/image.png')",
    },  
  },
  plugins: [],
}

