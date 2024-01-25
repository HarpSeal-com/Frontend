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


function Result() {
    //const {apiData} = useContext(ProductContext);

    return (
        <CCard style={{ width: '18rem' }}>
            <CCardImage orientation="top" src={amazonIcon}/>
            <CCardBody>
                <CCardTitle>HarpSeal found the Deal</CCardTitle>
                <CCardText>

                </CCardText>
            </CCardBody>
            <CListGroup flush>
                <CListGroupItem>Vendor: Amazon</CListGroupItem>
                <CListGroupItem>Price: 599</CListGroupItem>
            </CListGroup>
            <CCardBody>
                <a href={""}><CButton color="primary">Check it out</CButton></a>
            </CCardBody>
        </CCard>
    )
}

export default Result