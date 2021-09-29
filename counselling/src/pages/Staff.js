import React, {Component} from 'react';
import Student from "./Student";
import Login from "../components/Login";
import Navbar from "../components/Navbar"

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isLoggedIn": false
        }
    }

    componentDidMount() {
        if(localStorage.getItem("staff") !== null){
            this.setState({"isLoggedIn": true})
        }
    }

    logout = () => {
        this.setState({"isLoggedIn": false}, () => localStorage.clear())
    }

    change = (val) => {
        this.setState({"isLoggedIn": val});
    }



    render() {

        return (
            <div>

                {this.state.isLoggedIn &&
                <div>
                    <Navbar logout = {this.logout} />
                    <Student change={this.change}/>
                </div>
                }

                {!this.state.isLoggedIn &&
                <div>
                    <Navbar logout = {this.logout} />
                    <Login change={this.change}/>
                </div>
                }

            </div>
        );
    }
}

export default Staff;