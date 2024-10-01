import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice';
export const store = configureStore({
    reducer: todoReducer
})

// every application has one store which is called single source of truth   