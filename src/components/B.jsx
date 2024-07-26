"use client"

import React, { useRef } from "react"
import { useDispatch } from "react-redux"



export function B(){
    const dispatch=useDispatch()
    const[location, setLocation]=React.useState("")
    const locationRef=useRef()
    const handleClick=(eve)=>{
        alert(location)
    }
    const handleChange=(eve)=>{
        const loc=eve.target.value
       setLocation(loc)
       dispatch({type:"LOCATION_UPDATE",payload:loc})
    }
    return <div>    <h1>B</h1>
    <p>
    <b>Location:</b> <input onChange={handleChange}/>
    <button onClick={handleClick}>Submit</button>
    </p>
    </div>

}