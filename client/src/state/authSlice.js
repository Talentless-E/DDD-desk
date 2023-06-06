import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isLogin: false,
   user: null,
   token: null,
   modelName: "husky",
   models: [],
};



export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setLogin: (state, action) => {
         state.user = action.payload.user;
         state.token = action.payload.token;
         state.isLogin = true;
      },
      setLogout: (state) => {
         state.user = null;
         state.token = null;
         state.isLogin = false;
      },
   },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;



