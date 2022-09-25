import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./todosSlice"

const rootReducer = combineReducers({
    repos: todoSlice
})

export const store = configureStore( {reducer: rootReducer} )