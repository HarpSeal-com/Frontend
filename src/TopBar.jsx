//import {useState} from "react";
import './TopButtons.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormSwitch} from "@coreui/react";
import {useState, useEffect, createContext, useContext} from "react";
import {ProductContext} from "./Contexts/ProductContext.jsx";

function TopButtons() {

    const {autoRedirect, setAutoRedirect} = useContext(ProductContext)
    const changeAutoRedirect = () => {
        setAutoRedirect(!autoRedirect);
    }

    useEffect(() => {
        const redirect = createContext(autoRedirect);
        console.log(redirect);
    }, [autoRedirect]);

    return (
        <div className={"formButtonsTop"} class={"w-screen h-auto m-4 flex flex-col flex-no-wrap"}>
            <label className={"formButtonsTopLabel"}>Auto redirect</label>
            <CFormSwitch size="lg" id="formSwitchCheckDefaultLg" label={""} onClick={changeAutoRedirect}/>
        </div>
    )
}

export default TopButtons
