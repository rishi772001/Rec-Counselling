import React from 'react';
import logo from "../assets/logo.png";

function Header(props) {
    return (
        <div style={{textAlign: "center"}}>
            <br />
            <img src={logo} width={"30%"}/>
            <br/>
            <br/>
            <h1 style={{fontWeight: "800", fontSize: "24px"}}>GENERAL COUNSELLING</h1>
        </div>
    );
}

export default Header;