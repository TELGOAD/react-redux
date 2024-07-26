import {init}  from "./init"
import appReducer from "./appReducer"
import { configureStore } from "@reduxjs/toolkit"


export const appStore=configureStore(()=>{
  reducer: {
    appReducer: appReducer
  };
})