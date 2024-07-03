import React from 'react'
import './UseStates.css'
import { useState } from "react";

const UseStates = () => {
  function toggle(){
    setToggleText(!toggleText)
  }
    let initialValue=true;
    const [toggleText, setToggleText] = useState(initialValue);
  return (
    <> <h3>UseState Hook</h3>
    {
      toggleText ?<p>Hello App</p> :null
    }
    <button className="btn" onClick={toggle}>Toggle</button>
    </>
  )
}

export default UseStates;