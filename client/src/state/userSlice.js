import { createSlice } from "@reduxjs/toolkit";
import img1 from '../assets/preview1.png'
const initialState = {
   linked: false,
   accessToken:
      "vk1.a.tgco8nAQu0kC4BpR1yIivlllhZbrvIgWs7Ea3z__93Efk-C28XR3jdDLXMoKw2q7RQu1qCmQ0ZP88nuOgMtfok-ldMFNKbbuG6cuZ0BGvnQE2-iDDciE_msqqpBDeDsmJRcsBEJOxXYN7WdotD1ogbbnzvhvNWKOg-ry6eL0UAlpOn8aMR5VKnIsqTrK5E1k45g_Hw5fDcoZF-flbAzO0g",
   models: [],
};

export const authSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      getModels: (state) => {
         return state.models;
      },
      setModels: (state, action) => {
         state.models = [
            
            { name: action.payload.name, imgSrc: img1 },
         ];
      },
      setLinked: (state) => {
         state.linked = true
      }
   },
});

export const { getModels, setModels, setLinked } = authSlice.actions;

export default authSlice.reducer;
