import {useState} from "react";
import './form.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormInput, CFormSelect} from "@coreui/react";

function Form() {
    const [productName, setProductName] = useState("")
    console.log(productName)

    const productUpdate = (e) => {
        setProductName(e.target.value)
    }

    return (
        <div className={"formWrapper"}>
            <CFormInput type="text" id="floatingInput" floatingClassName="mb-3" floatingLabel="Product Name" placeholder="" onChange={productUpdate} required={true}/>
            <CFormSelect size="lg" className="" aria-label="Large select example" id={"selector"}>
                <option>Choose item category</option>
                <option value="1">Technology</option>
                <option value="2">Shoes</option>
                <option value="3">Clothes</option>
                <option value="4">Furniture</option>
                <option value="5">Food and Beverage</option>
            </CFormSelect>
        </div>
    )
}

export default Form
