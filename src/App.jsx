//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.png'

function App() {
  //const [count, setCount] = useState(0)

    const turnOnAnimation = () => {
      // Turn animation-play-state to running
      document.getElementById("logo").style.animationPlayState = "running";
    }

  return (
    <>
    <h1 className={"Title"}>HarpSeal</h1>

    <div className={"titleDiv"}>
        <img src={logo} className={"logo"} id={"logo"} alt="logo" onMouseEnter={turnOnAnimation}/>
    </div>
    </>
  )
}

export default App
