import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './slices/UserSlice';
import ContactReducer from './slices/ContactSlice';

export const Store = configureStore({
    reducer : {
        user : UserReducer,
        contacts : ContactReducer,
    }
})