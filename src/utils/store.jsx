import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movieSlice'
import gptReducer from './gptSlice'
import userReducer from './userSlice'
export const Store = configureStore({
      reducer:{
        movies : moviesReducer,
        gpt:gptReducer,
        user:userReducer,
      }
})