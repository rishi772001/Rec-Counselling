import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {Button as Btn} from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import db from "../Firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      inputs: [{}],
    };
  }

  componentDidMount(){
        // db.database().ref("/students").on("value", (snap) => {
        //     this.setState(snap.val());
        // })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    // db.database().ref(`/students/${this.state.rollNo}`).set(this.state);
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
    this.setState({ inputs: inputs }, () => {});
  };

  handleChangeMain = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Student Details
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="rollNo"
                    name="rollNo"
                    required
                    defaultValue={this.state.rollNo}
                    fullWidth
                    id="rollNo"
                    label="Roll No"
                    autoFocus
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    defaultValue={this.state.name}
                    name="name"
                    autoComplete="name"
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="year"
                    label="Year"
                    defaultValue={this.state.year}
                    name="year"
                    autoComplete="year"
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="sem"
                    label="Semester"
                    defaultValue={this.state.sem}
                    type="text"
                    id="sem"
                    autoComplete="sem"
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="dept"
                    label="Department"
                    defaultValue={this.state.dept}
                    type="text"
                    id="dept"
                    autoComplete="dept"
                    onChange={this.handleChangeMain}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="cgpa"
                    label="CGPA"
                    defaultValue={this.state.cgpa}
                    type="text"
                    id="cgpa"
                    autoComplete="cgpa"
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
                    defaultValue={this.state.arrearCount}
                    id="arrearCount"
                    autoComplete="arrearCount"
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
                              defaultValue={this.state.inputs[index].subjectCode}
                              id="subjectCode"
                              autoComplete="subjectCode"
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
                              defaultValue={this.state.inputs[index].subjectname}
                              id="subjectName"
                              autoComplete="subjectName"
                              onChange={(e) => this.handleChange(index, e)}
                            />
                          </Grid>
                          <Grid item md={3}>
                            <TextField
                              required
                              fullWidth
                              name="marks"
                              label="Subject Marks"
                              defaultValue={this.state.inputs[index].marks}
                              type="text"
                              id="marks"
                              autoComplete="marks"
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
                              defaultValue={this.state.inputs[index].attendance}
                              id="attendance"
                              autoComplete="attendance"
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
                        <br />
                      </>
                    ))}
                  <Button onClick={this.handleAddFields} color="secondary" variant="contained">+</Button>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </>
    );
  }
}

export default Students;
// export default function Student() {
//   const [state, setState] = React.useState([]);

//   return (
//     <ThemeProvider theme={theme}>
//       {console.log(state)}

//     </ThemeProvider>
//   );
// }
