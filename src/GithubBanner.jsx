//import {useState} from "react";
import './GithubBanner.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
//Import GithubLogo from './assets/github-logo.png'
import {CRow, CCol, CWidgetStatsD, } from "@coreui/react";
import CIcon from '@coreui/icons-react';
import {cibGithub} from "@coreui/icons";
import {CChartLine} from "@coreui/react-chartjs";


function TopButtons() {

    return (
        <CRow className={"Banner"}>
            <CCol xs={2}>
                <CWidgetStatsD
                    className=""
                    icon={<CIcon className={"my-4 text-white"} icon={cibGithub} height="70"/>}
                    chart={
                        <CChartLine
                            className="position-absolute w-100 h-100"
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                    {
                                        backgroundColor: 'rgba(255,255,255,.08)',
                                        borderColor: 'rgba(255,255,255,.35)',
                                        pointHoverBackgroundColor: '#fff 0.5',
                                        borderWidth: 3,
                                        data: [0, 15, 25, 30, 55, 61, 81],
                                        fill: true,
                                    },
                                ],
                            }}
                            options={{
                                elements: {
                                    line: {
                                        tension: 0.4,
                                    },
                                    point: {
                                        radius: 0,
                                        hitRadius: 10,
                                        hoverRadius: 4,
                                        hoverBorderWidth: 3,
                                    },
                                },
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                                scales: {
                                    x: {
                                        display: false,
                                    },
                                    y: {
                                        display: false,
                                    },
                                },
                            }}
                        />
                    }
                    style={{ '--cui-card-cap-bg': 'black' }}
                    values={[
                        { title: 'Stars', value: '2' },
                        { title: 'Visits', value: '81' },
                    ]}
                />
            </CCol>
        </CRow>
    )
}

export default TopButtons
