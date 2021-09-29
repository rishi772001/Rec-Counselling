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
        this.state = {"show": true, date: new Date().toLocaleString(), department: this.props.dept}
    }

    handleChangeMain = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const val = this.state;
        delete val.show;
        db.database().ref(`/students/${this.props.rollNo}/grievances`).set(val).then(() => {
                alert("Thank you, Successfully submitted");
                window.location.reload();
            }
        );
    }

    render() {
        return (
            <div>

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
                            Grievances
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={this.handleSubmit}
                            sx={{mt: 3}}
                        >
                            <Grid container spacing={2}>
                                {this.state.show &&
                                <>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="Hostel Issues"
                                            name="hostelIssues"
                                            required
                                            defaultValue={this.state.hostelIssues}
                                            fullWidth
                                            id="Hostel Issues"
                                            label="Hostel Issues"
                                            autoFocus
                                            onChange={this.handleChangeMain}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="transportIssues"
                                            label="Transport Isssues"
                                            defaultValue={this.state.transportIssue}
                                            name="transportIssues"
                                            autoComplete="Transport Issues"
                                            onChange={this.handleChangeMain}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="canteenIssues"
                                            label="Canteen Issues"
                                            defaultValue={this.state.canteenIssues}
                                            name="canteenIssues"
                                            autoComplete="Canteen Issues"
                                            onChange={this.handleChangeMain}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="academicIssues"
                                            label="Academic Issues"
                                            defaultValue={this.state.handleIssue}
                                            type="text"
                                            id="sem"
                                            autoComplete="Academic Issues"
                                            onChange={this.handleChangeMain}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
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
                                        />
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