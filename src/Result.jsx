import {createContext, useContext, useEffect, useState} from "react";
import './form.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormInput, CFormSelect, CButton, CAlert, CCallout} from "@coreui/react";
import {ProductContext} from "./Contexts/ProductContext";


function Result() {
    const {apiData} = useContext(ProductContext);

    return (
        <div>
            <h1>{apiData["Link"]}</h1>
        </div>
    )
}

export default Result