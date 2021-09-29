import React, {Component} from 'react';
import Student from "./Student";
import Login from "../components/Login";
import {Button} from "react-bootstrap";
import Navbar from "../components/Navbar"

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isLoggedIn": false
        }
    }

    componentDidMount() {
        if(localStorage.getItem("staff") !== undefined){
            this.setState({"isLoggedIn": true})
        }
    }

    logout = () => {
        this.setState({"isLoggedIn": false})
    }

    change = (val) => {
        this.setState({"isLoggedIn": val});
    }



    render() {

        return (
            <div>

                {this.state.isLoggedIn &&
                <>
                    <Navbar logout = {this.logout} />

                    <Student change={this.change}/>

                </>}
            {!this.state.isLoggedIn && <Login change={this.change}/> }

            </div>
        );
    }
}

export default Staff;