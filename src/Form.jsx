import {createContext, useContext, useEffect, useState} from "react";
import './form.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormInput, CFormSelect, CButton, CAlert, CCallout} from "@coreui/react";
import {ProductContext} from "./Contexts/ProductContext";

function Form() {
    // Set states as global contexts

    const {productName, setProductName} = useContext(ProductContext);
    const {category, setCategory} = useContext(ProductContext);
    const {buttonPressed, setButtonPressed} = useContext(ProductContext);
    const {apiData, setApiData} = useContext(ProductContext);

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

        // Make the API request
        fetch("http://127.0.0.1:8000/api/getProduct", {
            method: 'POST', // or 'GET', 'PUT', etc.
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                "product": productName,
                "category": category
                }
            ),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the API response data
                setApiData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        setButtonPressed(true)
    }

    const isButtonDisabled = productName.length > 2 && category.length > 0;

    return (
        <div className={"formWrapper"}>
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
