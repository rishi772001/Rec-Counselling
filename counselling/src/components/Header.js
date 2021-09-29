import React from 'react';
import logo from "../assets/logo.png";

function Header(props) {
    return (
        <div style={{textAlign: "center"}}>
            <img src={logo} width={"25%"} />
            <br />
            <br />
            <br />
            <h1 style={{fontWeight: "800"}}>GENERAL COUNSELLING</h1>
        </div>
    );
}

export default Header;