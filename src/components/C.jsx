
"use client"

import React from "react"
import { useSelector } from "react-redux"

export const C=()=>{
    const {name,location}=useSelector((state)=>{
        const {name, location}=state.appReducer
       
        return {name,location};
    })
   
    return <div>
    <h1>
        C
    </h1>
    <h1>Name: {name}</h1>
    <h1>Location:{location} </h1>
    </div>
}