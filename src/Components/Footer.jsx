//import {useState} from "react";
import '../Style/Footer.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFooter, CLink} from "@coreui/react";

function TopButtons() {

    return (
        <CFooter className={"FooterComponent"}>
            <div>
                <CLink href="https://github.com/HarpSeal-com" target={'_blank'}>HarpSeal</CLink>
                <span>&copy; 2023 opensource.</span>
            </div>
            <div>
                <span>United Kingdom ~ Coming to more countries soon</span>
            </div>
            <div>
                <span>Created by </span>
                <CLink href="https://github.com/Emad-Eldin-G" target={'_blank'}>Emad-Eldin-G</CLink>
            </div>
        </CFooter>
    )
}

export default TopButtons
