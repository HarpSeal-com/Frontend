import {createContext, useContext, useEffect, useState} from "react";
import LoadingImg from '../assets/Loading.png'
import '../Style/Loading.css'


function Loading() {

    return (
        <div className="Wrapper">
            <img src={LoadingImg} className="circleLoad" alt="circleLoader" width={100}/>
        </div>
    )
}

export default Loading