import {createContext, useContext, useEffect, useState} from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle, CListGroupItem, CListGroup, CCardText, CCardLink, CButton
} from "@coreui/react";
import {ProductContext} from "../Contexts/ProductContext.jsx";
import amazonIcon from '../assets/amazon-480.png'
import '../Style/Result.scss'


function Result() {
    const {apiData} = useContext(ProductContext);
    const {productName} = useContext(ProductContext);

    return (
        <div className="Wrapper">
            <CCard className="Product-Card">
                <CCardImage orientation="top" src={amazonIcon}/>
                <CCardBody>
                    <CCardTitle>HarpSeal found the Deal at {"Amazon"}</CCardTitle>
                    <CCardText>

                    </CCardText>
                </CCardBody>
                <CListGroup flush>
                    <CListGroupItem>Product:  <span className="Small-Text">{productName}</span></CListGroupItem>
                    <CListGroupItem>Vendor: <span className="Small-Text">{"Amazon"}</span></CListGroupItem>
                    <CListGroupItem>Price:  <span className="Small-Text"> £{599}</span></CListGroupItem>
                </CListGroup>
                <CCardBody>
                    <a href={""}><CButton color="primary">Check it out</CButton></a>
                </CCardBody>
            </CCard>
        </div>
    )
}

export default Result