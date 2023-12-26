import {useState} from "react";
import './form.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormInput} from "@coreui/react";

function Form() {
    const [productName, setProductName] = useState("")
    console.log(productName)

    const productUpdate = (e) => {
        setProductName(e.target.value)
    }

    return (
        <div className={"formWrapper"}>
            <CFormInput type="text" id="floatingInput" floatingClassName="mb-3" floatingLabel="Product Name" placeholder="" onChange={productUpdate}/>

        </div>
    )
}

export default Form
