import {init}  from "./init"
import {appReducer} from "./appReducer"
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

export const appStore=configureStore({
  reducer: {
    appReducer: appReducer
  },
  middleware:()=>{
    return [logger]
  }
})