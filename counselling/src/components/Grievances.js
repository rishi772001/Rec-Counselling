import React, {Component} from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import db from "../Firebase";

class Grievances extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "show": true, date: new Date().toLocaleString(), department: this.props.dept,
            "hostelIssues": "", "transportIssues": "", "canteenIssues": "", "academicIssues": "",
            "otherIssues": "", "facultyRemarks": "", "generalIssues": "Doing Well, Encouraged to do well"
        }
    }

    handleChangeMain = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            if (this.check()) {
                alert("Words limit exceeded, Maximum words is 50")
            }
        })
    }

    check = () => {
        return this.state.hostelIssues.split(" ").length > 50 || this.state.transportIssues.split(" ").length > 50 ||
            this.state.transportIssues.split(" ").length > 50 || this.state.canteenIssues.split(" ").length > 50 ||
            this.state.academicIssues.split(" ").length > 50 || this.state.otherIssues.split(" ").length > 50;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const val = {
            "hostelIssues": this.state.hostelIssues,
            "transportIssues": this.state.transportIssues,
            "canteenIssues": this.state.canteenIssues,
            "academicIssues": this.state.academicIssues,
            "otherIssues": this.state.otherIssues,
            "facultyRemarks": this.state.facultyRemarks,
            "date": this.state.date,
            "department": this.state.department,
            "generalIssues": this.state.generalIssues
        };
        if (this.check()
        ) {
            alert("Words limit exceeded, please try again!")
            return;
        }
        db.database().ref(`/students/${this.props.rollNo}/grievances`).set(val).then(() => {
                alert("Thank you, Successfully submitted");
                window.location.reload();
            }
        );
    }

    render() {
        return (
            <div>

                <Container component="main">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Grievances
                        </Typography>
                        <Box
                            component="form"
                            sx={{mt: 3}}
                        >
                            <Grid container spacing={2}>
                                {this.state.show &&
                                <>
                                    <Grid item xs={12}>
                                        <div className={"radio-div"}>
                                            Hostel Issues <br/>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={"showHostelIssues"}
                                                    value="yes"
                                                    checked={this.state.showHostelIssues === "yes"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                Yes
                                            </label>
                                            &nbsp;&nbsp;
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    name={"showHostelIssues"}
                                                    checked={this.state.showHostelIssues === "no"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                No
                                            </label>
                                        </div>

                                        {this.state.showHostelIssues === "yes" && <TextField
                                            autoComplete="Hostel Issues"
                                            name="hostelIssues"
                                            required
                                            defaultValue={this.state.hostelIssues}
                                            fullWidth
                                            id="Hostel Issues"
                                            label="Hostel Issues"
                                            autoFocus
                                            onChange={this.handleChangeMain}
                                        />}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={"radio-div"}>
                                            Transport Issues <br/>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={"showTransportIssues"}
                                                    value="yes"
                                                    checked={this.state.showTransportIssues === "yes"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                Yes
                                            </label>
                                            &nbsp;&nbsp;
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    name={"showTransportIssues"}
                                                    checked={this.state.showTransportIssues === "no"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                No
                                            </label>
                                        </div>
                                        {this.state.showTransportIssues === "yes" && <TextField
                                            required
                                            fullWidth
                                            id="transportIssues"
                                            label="Transport Issues"
                                            defaultValue={this.state.transportIssue}
                                            name="transportIssues"
                                            autoComplete="Transport Issues"
                                            onChange={this.handleChangeMain}
                                        />}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={"radio-div"}>
                                            Canteen Issues <br/>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="yes"
                                                    name={"showCanteenIssues"}
                                                    checked={this.state.showCanteenIssues === "yes"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                Yes
                                            </label>
                                            &nbsp;&nbsp;
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    name={"showCanteenIssues"}
                                                    checked={this.state.showCanteenIssues === "no"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                No
                                            </label>
                                        </div>
                                        {this.state.showCanteenIssues === "yes" &&
                                        <TextField
                                            required
                                            fullWidth
                                            id="canteenIssues"
                                            label="Canteen Issues"
                                            defaultValue={this.state.canteenIssues}
                                            name="canteenIssues"
                                            autoComplete="Canteen Issues"
                                            onChange={this.handleChangeMain}
                                        />}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={"radio-div"}>
                                            Academic Issues <br/>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="yes"
                                                    name={"showAcademicIssues"}
                                                    checked={this.state.showAcademicIssues === "yes"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                Yes
                                            </label>
                                            &nbsp;&nbsp;
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    name={"showAcademicIssues"}
                                                    checked={this.state.showAcademicIssues === "no"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                No
                                            </label>
                                        </div>
                                        {this.state.showAcademicIssues === "yes" &&
                                        <TextField
                                            required
                                            fullWidth
                                            name="academicIssues"
                                            label="Academic Issues"
                                            defaultValue={this.state.academicIssues}
                                            type="text"
                                            id="sem"
                                            autoComplete="Academic Issues"
                                            onChange={this.handleChangeMain}
                                        />}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div className={"radio-div"}>
                                            <label>
                                                General Issues: <br/>
                                            </label>
                                        </div>
                                        <select className={"select"} defaultValue={this.state.generalIssues}
                                                name="generalIssues" onChange={this.handleChangeMain}>
                                            <option className={"option"} value="Doing Well, Encouraged to do well">Doing
                                                Well, Encouraged to do well
                                            </option>
                                            <option className={"option"}
                                                    value="Student is not performing well, advised to concentrate more">Student
                                                is not performing well, advised to concentrate more
                                            </option>
                                        </select>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div className={"radio-div"}>
                                            Other Issues <br/>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="yes"
                                                    name={"showOtherIssues"}
                                                    checked={this.state.showOtherIssues === "yes"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                Yes
                                            </label>
                                            &nbsp;&nbsp;
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    name={"showOtherIssues"}
                                                    checked={this.state.showOtherIssues === "no"}
                                                    onChange={this.handleChangeMain}
                                                />&nbsp;
                                                No
                                            </label>
                                        </div>
                                        {this.state.showOtherIssues === "yes" &&
                                        <TextField
                                            required
                                            fullWidth
                                            name="otherIssues"
                                            label="Other Issues"
                                            defaultValue={this.state.otherIssues}
                                            type="text"
                                            id="otherIssues"
                                            autoComplete="Other Issue"
                                            onChange={this.handleChangeMain}
                                        />}
                                    </Grid>
                                </>
                                }
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="facultyRemarks"
                                        label="Faculty Remarks"
                                        defaultValue={this.state.facultyRemarks}
                                        type="text"
                                        id="Faculty Remarks"
                                        autoComplete="Faculty Remarks"
                                        onChange={this.handleChangeMain}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                onClick={this.handleSubmit}
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default Grievances;