//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React, {useEffect, useState} from 'react';
import './Style/App.css'
import logo from './assets/logo.png'
import {ProductContext} from "./Contexts/ProductContext.jsx";
import Form from "./Components/Form.jsx";
import Result from "./Components/Result.jsx";
import TopButtons from "./Components/TopBar.jsx";

function App() {
  //const [count, setCount] = useState(0)
    const [productName, setProductName] = useState("")
    const [category, setCategory] = useState("")
    const [buttonPressed, setButtonPressed] = useState(false)
    const [apiData, setApiData] = useState({})
    const [autoRedirect, setAutoRedirect] = useState(false);


    const turnOnAnimation = () => {
      // Turn animation-play-state to running      
      document.getElementById("logo").style.animationPlayState = "running";
  }

  const turnAnimationOff = () => {
      // Turn animation-play-state to paused
      document.getElementById("logo").style.animationPlayState = "paused";
  }


  return (
    <>
    <ProductContext.Provider value={{autoRedirect, setAutoRedirect}}>
        <TopButtons />
    </ProductContext.Provider>
    
    <h1 className={"Title"}>HarpSeal</h1>
    <div className={"titleDiv"} onMouseEnter={turnOnAnimation} onMouseLeave={turnAnimationOff}>
        <img src={logo} className={"logo"} id={"logo"} alt="logo"/>
    </div>

    <ProductContext.Provider value={{productName, setProductName, category, setCategory, buttonPressed, setButtonPressed, apiData, setApiData, autoRedirect}}>
        {!buttonPressed ? <Form/> : autoRedirect ? window.open('http://localhost:8080', '_blank') && <Result/>: <Result/>}
    </ProductContext.Provider>
    </>
  )
}

export default App
