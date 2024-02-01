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
import Loading from "./Components/Loading.jsx";

function App() {
  //const [count, setCount] = useState(0)
    const [productName, setProductName] = useState("")
    const [category, setCategory] = useState("")
    const [buttonPressed, setButtonPressed] = useState(false)
    const [apiData, setApiData] = useState()
    const [autoRedirect, setAutoRedirect] = useState(false);

    useEffect(() => {
      if (buttonPressed) {
        const logo = document.getElementById("logoTop");
        const logo2 = document.getElementById("logo");
        // play animation --> running
        logo.style.visibility = "visible";
        logo.style.opacity = "1";
        logo2.style.display = "none";

        }
    }
    )

  return (
    <>
    <ProductContext.Provider value={{autoRedirect, setAutoRedirect}}>
        <TopButtons />
    </ProductContext.Provider>
    
    <div className={"appName"}>
        <a href="https://harpseal.vercel.app/"><img src={logo} className={"logoTop"} id={"logoTop"} alt="logo"/></a>
        <a href="https://harpseal.vercel.app/"><h1 className={"Title"}>HarpSeal</h1></a>
    </div>

    <div className={"titleDiv"}>
        <img src={logo} className={"logo"} id={"logo"} alt="logo"/>
    </div>

    <ProductContext.Provider value={{productName, setProductName, category, setCategory, buttonPressed, setButtonPressed, apiData, setApiData, autoRedirect}}>
      {!buttonPressed ? <Form/> : !apiData ? <Loading/> : (autoRedirect ? window.open('http://localhost:8080', '_blank') && <Result/> : <Result/>) }
    </ProductContext.Provider>
    </>
  )
}

export default App
