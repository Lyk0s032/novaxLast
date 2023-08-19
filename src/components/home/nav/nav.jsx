import React from "react";
import Nova from './../../../assets/novaX.png';
import { useNavigate } from "react-router-dom";
export default function Nav(){
    const navigate = useNavigate();
    return (
        <div className="nav-home">
            <div className="container">
                <div className="leftIcon">
                    <img src={Nova} />
                </div>
                <div className="right-nav">
                    <ul>
                        <li onClick={() => navigate('/')}>
                            Inicio
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}