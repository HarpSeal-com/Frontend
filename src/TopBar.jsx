//import {useState} from "react";
import './TopButtons.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFormSwitch} from "@coreui/react";

function TopButtons() {

    return (
        <div className={"formButtonsTop"}>
            <label className={"formButtonsTopLabel"}>Auto redirect</label>
            <CFormSwitch size="lg" id="formSwitchCheckDefaultLg" label={""}/>
        </div>
    )
}

export default TopButtons
