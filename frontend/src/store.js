import {configureStore} from "@reduxjs/toolkit";
import authReducer from './controller/Redux/authSlice'
import bugReducer from './controller/Redux/bugSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bug: bugReducer,
    }
    // middleware: [thunk]
})
