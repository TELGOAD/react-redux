"use client"
import React, { useRef } from "react"

import {useDispatch} from 'react-redux'



export default ()=>{
    const nameRef=useRef()
    const dispatch=useDispatch();
    const handleClick=(eve)=>{
        console.log("inside")
      const  name=nameRef.current.value
      console.log()

        dispatch({type:"NAME_UPDATE",payload:name})
    }
    return <div>
        <h1>A</h1>
        <p>
       <b>Name: </b> <input ref={nameRef}/>
       <button onClick={handleClick}>Submit</button>
       </p>
    </div>
}