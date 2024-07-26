"use client"
import React, { useRef } from "react"

import {useDispatch} from 'react-redux'



export default ()=>{
    const nameRef=useRef()
    const dispatch=useDispatch();
    const handleClick=(eve)=>{
        console.log("inside")
        console.log(nameRef.current.value)
    }
    return <div>
        <h1>A</h1>
        <p>
       <b>Name: </b> <input ref={nameRef}/>
       <button onClick={handleClick}>Submit</button>
       </p>
    </div>
}