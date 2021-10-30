import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import db from "../Firebase";
import Header from "../components/Header";
import Grievances from "../components/Grievances";
import Navbar from "../components/Navbar"

class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffId: localStorage.getItem("staff"),
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
                this.setState(snap.val(), () => console.log(this.state))
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
        this.setState({inputs: inputs});
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

    logout = () => {
        localStorage.clear();
        window.location.replace("/staff")
    }

    render() {
        return (
            <>
                <Navbar logout={this.logout}/>
                <Header/>

                <Container component="main" maxWidth="md">
                    <CssBaseline/>
                    <Box
                        sx={{
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
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={"radio-div"}>
                                        <label>
                                            Year: <br/>
                                        </label>
                                    </div>
                                    <select className={"select"} value={this.state.year}
                                            name="year" disabled>
                                        <option className={"option"} value="">Select
                                        </option>
                                        <option className={"option"} value="1">1
                                        </option>
                                        <option className={"option"}
                                                value="2">2
                                        </option>
                                        <option className={"option"}
                                                value="3">3
                                        </option>
                                        <option className={"option"}
                                                value="4">4
                                        </option>
                                    </select>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className={"radio-div"}>
                                        <label>
                                            Semester: <br/>
                                        </label>
                                    </div>
                                    <select className={"select"} value={this.state.sem}
                                            name="sem" disabled>
                                        <option className={"option"} value="">Select
                                        </option>
                                        <option className={"option"} value="1">1
                                        </option>
                                        <option className={"option"}
                                                value="2">2
                                        </option>
                                        <option className={"option"}
                                                value="3">3
                                        </option>
                                        <option className={"option"}
                                                value="4">4
                                        </option>
                                        <option className={"option"} value="5">5
                                        </option>
                                        <option className={"option"}
                                                value="6">6
                                        </option>
                                        <option className={"option"}
                                                value="7">7
                                        </option>
                                        <option className={"option"}
                                                value="8">8
                                        </option>
                                    </select>

                                </Grid>
                                <Grid item xs={6}>
                                    <div className={"radio-div"}>
                                        <label>
                                            Department: <br/>
                                        </label>
                                    </div>

                                    <select className={"select"} value={this.state.dept}
                                            name="dept" disabled>
                                        <option className={"option"} value="">Select
                                        </option>
                                        <option className={"option"}
                                                value="Aeronautical Engineering">Aeronautical Engineering
                                        </option>
                                        <option className={"option"}
                                                value="Artificial Intelligence & Machine Learning">Artificial
                                            Intelligence &amp; Machine Learning
                                        </option>
                                        <option className={"option"}
                                                value="Automobile Engineering">Automobile Engineering
                                        </option>
                                        <option className={"option"}
                                                value="Biomedical Engineering">Biomedical Engineering
                                        </option>
                                        <option className={"option"} value="Biotechnology">Biotechnology
                                        </option>
                                        <option className={"option"}
                                                value="Chemical Engineering">Chemical Engineering
                                        </option>
                                        <option className={"option"}
                                                value="Civil Engineering">Civil Engineering
                                        </option>
                                        <option className={"option"}
                                                value="Computer Science & Business System">Computer
                                            Science &amp; Business System
                                        </option>
                                        <option className={"option"} value="Computer Science & Design">Computer
                                            Science &amp; Design
                                        </option>
                                        <option className={"option"}
                                                value="Computer Science & Engineering">Computer
                                            Science &amp; Engineering
                                        </option>
                                        <option className={"option"}
                                                value="Electrical & Electronics Engineering">Electrical &amp; Electronics
                                            Engineering
                                        </option>
                                        <option className={"option"}
                                                value="Electronics & Communication Engineering">Electronics &amp; Communication
                                            Engineering
                                        </option>
                                        <option className={"option"}
                                                value="Food Technology">Food Technology
                                        </option>
                                        <option className={"option"}
                                                value="Information Technology">Information Technology
                                        </option>
                                        <option className={"option"}
                                                value="Mechanical Engineering">Mechanical Engineering
                                        </option>
                                        <option className={"option"}
                                                value="Mechatronics">Mechatronics
                                        </option>
                                        <option className={"option"}
                                                value="Robotics and Automation">Robotics and Automation
                                        </option>
                                    </select>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="cgpa"
                                        label="CGPA(Sem 1/ Sem 3/ Sem 5)"
                                        value={this.state.cgpa}
                                        type="text"
                                        id="cgpa"
                                        disabled
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
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <h3>Student Academic Details</h3>
                                    <br />
                                    {this.state &&
                                    Object.keys(this.state.inputs).map((input, index) => (
                                        <Box key={index}>
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
                                                    <Button
                                                        variant="contained"
                                                        size={"small"}
                                                        color="error"
                                                        onClick={() => this.handleRemoveFields(index)}
                                                    >
                                                        &#8722;
                                                    </Button>
                                                </Grid>

                                            </Grid>
                                            <br/>
                                        </Box>
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
                            <Box>
                                {this.state.rollNo !== "" && this.state.dept !== "" && localStorage.getItem("staff") !== null &&
                                <>
                                    <hr />
                                    <Grievances
                                        dept={this.state.dept} rollNo={this.state.rollNo}
                                    />
                                </>
                                }
                            </Box>
                        </Box>
                    </Box>
                </Container>


            </>
        );
    }
}

export default Students;
