import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todolist'

export const store = configureStore({
    reducer: todoReducer,
})