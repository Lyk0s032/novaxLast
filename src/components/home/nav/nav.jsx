import React from "react";
import Nova from './../../../assets/novaX.png';
export default function Nav(){
    return (
        <div className="nav-home">
            <div className="container">
                <div className="leftIcon">
                    <img src={Nova} />
                </div>
                <div className="right-nav">
                    <ul>
                        <li>
                            <span>Inicio</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}