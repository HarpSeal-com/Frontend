import {createContext, useContext, useEffect, useState} from "react";
import '../Style/form.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormInput, CFormSelect, CButton, CModal, CModalBody, CModalFooter, CModalTitle, CModalHeader} from "@coreui/react";
import {ProductContext} from "../Contexts/ProductContext.jsx";

function Form() {
    // Set states as global contexts

    const {productName, setProductName} = useContext(ProductContext);
    const {category, setCategory} = useContext(ProductContext);
    const {buttonPressed, setButtonPressed} = useContext(ProductContext);
    const {apiData, setApiData} = useContext(ProductContext);
    const [visible, setVisible] = useState(false)

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
            <CButton color="light" id={"Tips-Button"} onClick={() => setVisible(!visible)}>How to use</CButton>
            <CModal
            backdrop="static"
            visible={visible}
            onClose={() => setVisible(false)}
            aria-labelledby="StaticBackdropExampleLabel"
            >
                <CModalHeader>
                    <CModalTitle id="StaticBackdropExampleLabel">How to use Tips</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <ul>
                        <li className={"main-li"}><span className={"li-title"}>Don't be vague:</span> 
                            <ul>
                                    <li>i 14 ❌</li>
                                    <li>iPhone 14 Pro Silver 256GB ✅</li>
                            </ul>
                        </li>
                        <li className={"main-li"}><span className={"li-title"}>Don't type in non-existent products </span> </li>
                        <li className={"main-li"}><span className={"li-title"}>Select appropriate product category:</span>
                            <ul>
                                <li>LG OLED 65 --> TVs</li>
                                <li>Xbox series X --> Consoles</li>
                            </ul>
                        </li>
                        <li className={"main-li"}><span className={"li-title"}>Auto Direct switch</span> will take you to your product after the Seal finds the Deal</li>
                    </ul>
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={() => setVisible(false)}>
                        Perfect
                    </CButton>
                </CModalFooter>
            </CModal>

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
