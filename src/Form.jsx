import {useState} from "react";
import './form.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormInput, CFormSelect, CButton, CAlert} from "@coreui/react";

function Form() {
    const [productName, setProductName] = useState("")
    const [category, setCategory] = useState("")
    console.log(productName)
    console.log(category)

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

    const isButtonDisabled = productName.length > 0 && category.length > 0;

    return (
        <div className={"formWrapper"}>
            <CFormInput type="text" id="floatingInput" floatingClassName="mb-3" floatingLabel="Product Name" placeholder="" onChange={productUpdate} required={true}/>

            <CFormSelect size="lg" className="" aria-label="Large select example" id={"selector"} onChange={categoryUpdate}>
                <option>Choose item category</option>
                <option value="1">Technology</option>
                <option value="2">Shoes</option>
                <option value="3">Clothes</option>
                <option value="4">Furniture</option>
                <option value="5">Food and Beverage</option>
            </CFormSelect>

            <CButton color="light" id={"Submit"} disabled={!isButtonDisabled} onMouseEnter={alertSubmit}>Seal the Deal</CButton>

            <CAlert color="dark" id={"buttonNotification"}>
                Please search for a product
            </CAlert>
            <CAlert color="dark" id={"buttonNotification"}>
                Please select a category
            </CAlert>

        </div>
    )
}

export default Form
