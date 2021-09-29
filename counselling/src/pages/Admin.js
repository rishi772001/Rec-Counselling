import React, {Component} from 'react';
import db from "../Firebase"
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import Navbar from "../components/Navbar";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        db.database().ref("/students").on("value", (snap) => {
            if (snap.val() !== null) {
                this.setState(snap.val())
            }
        })
    }

    logout = () => {
        localStorage.clear();
    }

    render() {
        if (localStorage.getItem("admin") === undefined) {
            window.location.replace("/staff");
        }
        return (
            <div>
                <Navbar logout={this.logout}/>
                <Typography style={{textAlign: 'center', fontSize: "32px", fontWeight: "600"}}>COUNSELLING
                    DETAILS</Typography>
                <Table style={{marginTop: "40px"}}>
                    <TableHead>
                        <TableCell>
                            Roll No
                        </TableCell>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Department
                        </TableCell>
                        <TableCell>
                            Date of Counselling
                        </TableCell>
                        <TableCell>
                            Hostel Issues
                        </TableCell>
                        <TableCell>
                            Academic Issues
                        </TableCell>
                        <TableCell>
                            Canteen Issues
                        </TableCell>
                        <TableCell>
                            Transport Issues
                        </TableCell>
                        <TableCell>
                            Other Issues
                        </TableCell>
                        <TableCell>
                            Faculty Remarks
                        </TableCell>

                    </TableHead>
                    <TableBody>
                        {Object.keys(this.state).map((val, index) =>
                            <>
                                <TableRow>
                                    <TableCell>
                                        {this.state[val].rollNo}
                                    </TableCell>
                                    <TableCell>
                                        {this.state[val].name}
                                    </TableCell>
                                    <TableCell>
                                        {this.state[val].dept}
                                    </TableCell>
                                    <TableCell>
                                        {this.state[val]["grievances"]["date"]}
                                    </TableCell>
                                    <TableCell>
                                        {this.state[val]["grievances"]["hostelIssues"]}
                                    </TableCell>
                                    <TableCell>
                                        {this.state[val]["grievances"]["academicIssues"]}
                                    </TableCell>
                                    <TableCell>
                                        {this.state[val]["grievances"]["canteenIssues"]}                                    </TableCell>
                                    <TableCell>
                                        {this.state[val]["grievances"]["transportIssues"]}                                    </TableCell>
                                    <TableCell>
                                        {this.state[val]["grievances"]["otherIssues"]}                                    </TableCell>
                                    <TableCell>
                                        {this.state[val]["grievances"]["facultyRemarks"]}                                    </TableCell>
                                </TableRow>
                            </>)

                        }

                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Admin;