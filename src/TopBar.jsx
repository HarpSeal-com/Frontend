//import {useState} from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormSwitch} from "@coreui/react";
import {useState, useEffect, createContext, useContext} from "react";
import {ProductContext} from "../Contexts/ProductContext.jsx";

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
        <div className={"formButtonsTop"} class="w-screen h-auto m-2 flex flex-col flex-no-wrap justify-start content-start">
            <label className={"formButtonsTopLabel"} class="text-white font-gotham ">Auto redirect</label>
            <CFormSwitch id="formSwitchCheckDefaultNormal" label={""} onClick={changeAutoRedirect}/>
        </div>
    )
}

export default TopButtons
