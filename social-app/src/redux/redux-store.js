import { combineReducers, createStore } from "@reduxjs/toolkit";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
});

let store = createStore (reducers);

export default store;
