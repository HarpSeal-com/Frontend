import {createContext, useContext, useEffect, useState} from "react";
import '../Style/Modal.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CButton, CModal, CModalBody, CModalHeader, CModalFooter} from "@coreui/react";
import {ProductContext} from "../Contexts/ProductContext.jsx";

function Modal() {
    // Set states as global contexts
    const {modalTip, setModalTip} = useContext(ProductContext);

    return (
        <div className={"Modal-Wrapper"}>
            <CModal
            visible={modalTip}
            onClose={() => setModalTip(false)}
            aria-labelledby="How-to-use"
            >
            <CModalHeader onClose={() => setModalTip(false)}>
                <CModalTitle id="How-to-use">Modal title</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Woohoo, you're reading this text in a modal!</p>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setModalTip(false)}>
                Close
                </CButton>
                <CButton color="primary">Save changes</CButton>
            </CModalFooter>
        </CModal>
        </div>
    )
}

export default Modal
