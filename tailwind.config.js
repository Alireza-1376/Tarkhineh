import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      fontFamily :{
        "Estedad":["Estedad"],
      } ,
      colors:{
        "shade" :{
          1 : "#396F4B",
          2 : "#315F41",
          3 : "#294F36",
          4 : "#21402B",
          5 : "#183020" ,
          6 : "#102016" ,
          7 : "#08100B" 
        },
        "tint" :{
          1 : "#E5F2E9",
          2 : "#CAE4D3",
          3 : "#B0D7BD",
          4 : "#96C9A7",
          5 : "#7CBC91" ,
          6 : "#61AE7B" ,
          7 : "#4E9968" 
        },
        "gray" :{
          1 : "#F9F9F9",
          2 : "#E1E1E1",
          3 : "#EDEDED",
          4 : "#CBCBCB",
          5 : "#ADADAD",
          6 : "#757575",
          7 : "#717171",
          8 : "#353535",
        },
        "error":{
          normal:"#C30000",
          light:"#ED2E2E",
          extraLight:"#FFF2F2"
        },
        "success":{
          normal:"#00966D",
          light:"#00BA88",
          extraLight:"#F3FDFA"
        },
        "warning":{
          normal:"#A9791C",
          light:"#F4B740",
          extraLight:"#FFF8E1"
        },
        "primary":"#417F56"
      }
    },
  },
  plugins: [flowbiteReact],
}