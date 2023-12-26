//import {useState} from "react";
import './Footer.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFooter, CLink} from "@coreui/react";

function TopButtons() {

    return (
            <CFooter className={"FooterComponent"}>
                <div>
                    <CLink href="https://github.com/Emad-Eldin-G/Harp-Seal" target={'_blank'}>HarpSeal</CLink>
                    <span>&copy; 2023 opensource.</span>
                </div>
                <div>
                    <span>Created by </span>
                    <CLink href="https://github.com/Emad-Eldin-G" target={'_blank'}>Emad-Eldin-G</CLink>
                </div>
            </CFooter>
    )
}

export default TopButtons
