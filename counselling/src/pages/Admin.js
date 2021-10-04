import React, {Component} from 'react';
import db from "../Firebase"
import {Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography} from "@mui/material";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import XLSX from 'xlsx';
import Grid from "@mui/material/Grid";
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.fetch();
    }

    logout = () => {
        localStorage.clear();
        window.location.replace("/staff")
    }

    fetch = () => {
        const start = document.getElementById("startDate").value;
        const end = document.getElementById("endDate").value;


        if (start === "" || end === "") {
            db.database().ref("/students").on("value", (snap) => {
                let array = []
                if (snap.val() !== null) {
                    let data = snap.val();
                    for (let i in data) {
                        if(data[i]["grievances"] !== undefined) {
                            array.push(data[i])
                        }
                    }
                }
                this.setState({"data": array}, () => console.log(this.state))
            })
        } else {
            let startDate = new Date(start);
            let endDate = new Date(end);
            if(endDate < startDate){
                alert("Start Date cannot be high than End Date");
                return;
            }
            db.database().ref("/students").on("value", (snap) => {
                let arr = []
                if (snap.val() !== null) {
                    let data = snap.val();
                    for (let i in data) {
                        if(data[i]["grievances"] !== undefined) {
                            let db = new Date(data[i]["grievances"]["date"]);
                            endDate.setDate(endDate.getDate() + 1);

                            if ((db > startDate) && (db < endDate)) {
                                arr.push(data[i])
                            }
                        }
                    }
                }

                this.setState({"data": arr}, () => console.log(this.state))
            })
        }

    }


    export = () => {
        let data = []
        for(let i in this.state.data){
            let temp = {
                "Roll No" : this.state.data[i].rollNo,
                "Department" : this.state.data[i].dept,
                "Name" : this.state.data[i]["name"],
                "Year" : this.state.data[i]["year"],
                "Date" : this.state.data[i]["grievances"]["date"],
                "Hostel Issues" : this.state.data[i]["grievances"]["hostelIssues"],
                "Canteen Issues" : this.state.data[i]["grievances"]["canteenIssues"],
                "Transport Issues" : this.state.data[i]["grievances"]["transportIssues"],
                "Academic Issues" : this.state.data[i]["grievances"]["academicIssues"],
                "Other Issues" : this.state.data[i]["grievances"]["otherIssues"],
                "Faculty remarks" : this.state.data[i]["grievances"]["facultyRemarks"],
            }
            console.log(temp)
            data.push(temp)
        }
        const workSheet = XLSX.utils.json_to_sheet(data);
        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, "Counselling")
        let buf = XLSX.write(workBook, {bookType: "xlsx", type: "buffer"})
        XLSX.write(workBook, {bookType: "xlsx", type: "binary"})
        XLSX.writeFile(workBook, "counselling.xlsx");
    }

    render() {
        if (localStorage.getItem("admin") === null) {
            window.location.replace("/staff");
        }
        return (
            <>
                <Navbar logout={this.logout}/>
                <Typography style={{textAlign: 'center', fontSize: "32px", fontWeight: "600"}}>COUNSELLING
                    DETAILS</Typography>

                <div style={{margin: "30px"}}>
                    <Grid container spacing={2}>
                        <Grid item xl={3}>
                            Start Date: <TextField type={"date"} id={"startDate"}/> &nbsp;
                        </Grid>
                        <Grid item xl={3}>
                            End Date: <TextField type={"date"} id={"endDate"}/> &nbsp;
                        </Grid>
                        <Grid item xl={1}>
                            <Button onClick={this.fetch} variant={"contained"} color={"primary"}>Fetch</Button> &nbsp;
                            <Button onClick={this.export} variant={"contained"} color={"secondary"}>Export</Button>
                        </Grid>
                    </Grid>
                </div>

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
                            Year
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
                        {this.state && this.state.data && Object.keys(this.state.data).map((val, index) =>
                            <>
                                {this.state["data"][val]["grievances"] !== undefined &&
                                <TableRow>
                                    <TableCell>
                                        {this.state["data"][val].rollNo}
                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val].name}
                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val].dept}
                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val].year}
                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val]["grievances"]["date"]}
                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val]["grievances"]["hostelIssues"]}
                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val]["grievances"]["academicIssues"]}
                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val]["grievances"]["canteenIssues"]}                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val]["grievances"]["transportIssues"]}                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val]["grievances"]["otherIssues"]}                                    </TableCell>
                                    <TableCell>
                                        {this.state["data"][val]["grievances"]["facultyRemarks"]}                                    </TableCell>
                                </TableRow>}
                            </>)

                        }

                    </TableBody>
                </Table>
            </>
        );
    }
}

export default Admin;