import { configureStore} from "@reduxjs/toolkit";
import authReducer from '../state/authSlice'
import modelsReducer from '../state/modelsSlice'
import userReducer from '../state/userSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        models: modelsReducer,
        user: userReducer,
    }
})