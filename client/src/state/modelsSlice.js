import { createSlice } from "@reduxjs/toolkit";

import img2 from '../assets/preview2.png'
import img3 from '../assets/preview3.png'

const initialState = {
    models: [
       {
          name: "belyash",
          imgSrc: img3,
       },
       {
          name: "pepe",
          imgSrc: img2,
       },
    ],
 };

export const modelSlice = createSlice({
    name: "models",
    initialState,
    reducers: {
       getModels: (state) => {
          return state.models;
       },
       setModels: (state, action) => {
          state.models = [
             ...state.modals,
             { name: action.payload.name, imgSrc: action.payload.imgSrc },
          ];
       },
    },
 });
 
 export const { getModels, setModels} = modelSlice.actions;
 
 export default modelSlice.reducer