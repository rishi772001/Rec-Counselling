import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {Button as Btn} from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import db from "../Firebase";
import {createTheme} from "@mui/material/styles";
import Header from "../components/Header";
import Grievances from "../components/Grievances";

const theme = createTheme();

class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rollNo: "",
            name: "",
            dept: "",
            sem: "",
            year: "",
            cgpa: "",
            arrearCount: "",
            inputs: [],
        };
    }

    fetchStudentDetails = () => {
        db.database().ref(`/students/${this.state.rollNo}`).once("value", (snap) => {
            if (snap.val() != null) {
                this.setState(snap.val())
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        if (this.state.rollNo === "") {
            alert("Please enter roll number");
            return;
        }
        db.database().ref(`/students/${this.state.rollNo}`).set(this.state).then(() => {
                alert("Thank you, Successfully submitted");
                window.location.reload();
            }
        );

    };

    handleRemoveFields = (index) => {
        const inputs = this.state.inputs;
        inputs.splice(index, 1);
        this.setState(inputs);
    };

    handleAddFields = () => {
        const inputs = this.state.inputs;
        inputs.push({
            subjectCode: "",
            subjectName: "",
            marks: "",
            attendance: "",
        });
        this.setState({inputs: inputs});
    };

    handleChange = (index, event) => {
        const inputs = this.state.inputs;
        inputs[index][event.target.name] = event.target.value;
        this.setState({inputs: inputs}, () => {
        });
    };

    handleChangeMain = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <>
                <Header/>

                <Container component="main" maxWidth="md">
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
                            <h3>Student Details</h3>
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={this.handleSubmit}
                            sx={{mt: 3}}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={11}>
                                    <TextField
                                        name="rollNo"
                                        required
                                        value={this.state.rollNo}
                                        fullWidth
                                        label="Roll No"
                                        autoFocus
                                        onChange={this.handleChangeMain}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Button variant="contained" color="primary"
                                            onClick={this.fetchStudentDetails}>Get</Button>

                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        value={this.state.name}
                                        name="name"
                                        onChange={this.handleChangeMain}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="year"
                                        label="Year"
                                        value={this.state.year}
                                        name="year"
                                        onChange={this.handleChangeMain}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="sem"
                                        label="Semester"
                                        value={this.state.sem}
                                        type="text"
                                        id="sem"
                                        onChange={this.handleChangeMain}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="dept"
                                        label="Department"
                                        value={this.state.dept}
                                        type="text"
                                        id="dept"
                                        onChange={this.handleChangeMain}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="cgpa"
                                        label="CGPA"
                                        value={this.state.cgpa}
                                        type="text"
                                        id="cgpa"
                                        onChange={this.handleChangeMain}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="arrearCount"
                                        label="Arrear Count"
                                        type="text"
                                        value={this.state.arrearCount}
                                        id="arrearCount"
                                        onChange={this.handleChangeMain}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {this.state &&
                                    Object.keys(this.state.inputs).map((input, index) => (
                                        <>
                                            <Grid container spacing={2}>
                                                <Grid item md={2}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="subjectCode"
                                                        label="Subject Code"
                                                        type="text"
                                                        value={this.state.inputs[index].subjectCode}
                                                        id="subjectCode"
                                                        onChange={(e) => this.handleChange(index, e)}
                                                    />
                                                </Grid>
                                                <Grid item md={3}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="subjectName"
                                                        label="Subject Name"
                                                        type="text"
                                                        value={this.state.inputs[index].subjectName}
                                                        id="subjectName"
                                                        onChange={(e) => this.handleChange(index, e)}
                                                    />
                                                </Grid>
                                                <Grid item md={3}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="marks"
                                                        label="Subject Marks"
                                                        value={this.state.inputs[index].marks}
                                                        type="text"
                                                        id="marks"
                                                        onChange={(e) => this.handleChange(index, e)}
                                                    />
                                                </Grid>
                                                <Grid item md={3}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="attendance"
                                                        label="Attendance"
                                                        type="text"
                                                        value={this.state.inputs[index].attendance}
                                                        id="attendance"
                                                        onChange={(e) => this.handleChange(index, e)}
                                                    />
                                                </Grid>
                                                <Grid item md={1}>
                                                    <Btn
                                                        variant="danger"
                                                        onClick={(e) => this.handleRemoveFields(index)}
                                                    >
                                                        -
                                                    </Btn>
                                                </Grid>

                                            </Grid>
                                            <br/>
                                        </>
                                    ))}
                                    <Button onClick={this.handleAddFields} color="secondary"
                                            variant="contained">Add Subject</Button>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Container>
                {this.state.rollNo !== "" && this.state.dept !== "" && localStorage.getItem("staff") !== undefined &&
                    <Grievances dept={this.state.dept} rollNo={this.state.rollNo}/>
                }

            </>
        );
    }
}

export default Students;
