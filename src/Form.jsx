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

    const isButtonDisabled = productName.length > 1 && category.length > 0;

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

            <CButton color="light" id={"Submit"} disabled={!isButtonDisabled} onMouseEnter={alertSubmit}>Seal the Deal</CButton>

        </div>
    )
}

export default Form
