//import {useState} from "react";
import '../Style/Footer.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CFooter, CLink, CTooltip} from "@coreui/react";

function TopButtons() {

    return (
        <CFooter className={"FooterComponent"}>
            <div>
                <CLink href="https://github.com/HarpSeal-com" target={'_blank'}>
                    <CTooltip content="Visit Github repository" placement="top">
                        <span className='footer-text'>HarpSeal</span>
                    </CTooltip>
                </CLink>
                <span>&copy; 2023 opensource.</span>
            </div>
            <div>
                <span>United Kingdom ~ Coming to more countries soon</span>
            </div>
            <div>
                <span>Created by </span>
                <CLink href="https://github.com/Emad-Eldin-G" target={'_blank'}>
                    <CTooltip content="Check out my Github Profile" placement="top">
                        <span className='footer-text'>Emad-Eldin-G</span>
                    </CTooltip>
                </CLink>
            </div>
        </CFooter>
    )
}

export default TopButtons
