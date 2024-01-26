import {createContext, useContext, useEffect, useState} from "react";
import '../Style/form.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormInput, CFormSelect, CButton, CAlert, CCallout} from "@coreui/react";
import {ProductContext} from "../Contexts/ProductContext.jsx";

function Form() {
    // Set states as global contexts

    const {productName, setProductName} = useContext(ProductContext);
    const {category, setCategory} = useContext(ProductContext);
    const {buttonPressed, setButtonPressed} = useContext(ProductContext);
    const {apiData, setApiData} = useContext(ProductContext);
    const {modalTip, setModalTip} = useContext(ProductContext);

    const productUpdate = (e) => {
        setProductName(e.target.value)
    }


    const categoryUpdate = (e) => {
        setCategory(e.target.value)
    }

    const alertSubmit = () => {
        if (productName.length <= 0) {
            alert("Please enter a product name")
        } else if (category.length <= 0) {
            alert("Please select a category")
        }

    }

    const apiCall = () => {

        setButtonPressed(true)
    }

    const isButtonDisabled = productName.length > 2 && category.length > 0;

    return (
        <div className={"formWrapper"}>
            <CButton color="light" id={"Tips-Button"} onClick={setModalTip(true)}>How to use</CButton>

            <CFormInput type="text" id="floatingInput" floatingClassName="mb-3" floatingLabel="Product Name" placeholder="" onChange={productUpdate} required={true}/>

            <CFormSelect size="lg" className="" aria-label="Large select example" id={"selector"} onChange={categoryUpdate}>
                <option value="0">Choose item category</option>
                <option value="1">Phones</option>
                <option value="2">Laptops</option>
                <option value="3">Consoles</option>
                <option value="4">TVs</option>
            </CFormSelect>

            <CButton color="light" id={"Submit"} disabled={!isButtonDisabled} onMouseEnter={alertSubmit} onClick={apiCall}>Seal the Deal</CButton>
        </div>
    )
}

export default Form
