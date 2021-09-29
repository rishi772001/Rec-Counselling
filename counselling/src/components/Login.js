import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    responseGoogle = (response) => {
        if (response.type !== "error") {
            if (response.profileObj === undefined || (response.profileObj.email.split(".").length) > 7) {
                alert("Login failed");
                window.location.replace("/")
            } else {
                localStorage.setItem("staff", response.profileObj.email);
                this.props.change(true);

            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if(this.state.username === "admin" && this.state.password === "admin"){
            localStorage.setItem("admin", "true");
            window.location.replace("/admin")
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
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
                            <h3>Login</h3>
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={this.handleSubmit}
                            sx={{mt: 3}}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="username"
                                        required
                                        fullWidth
                                        label="User Name"
                                        autoFocus
                                        onChange={this.handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        type={"password"}
                                        name="password"
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{mt: 3, mb: 2}}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={3} style={{marginTop: "20px"}}>
                                    <GoogleLogin
                                        clientId="801319498664-tho0261udroig8og9c64vr9heosno8bl.apps.googleusercontent.com"
                                        buttonText="Staff Sign In"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </Grid>
                            </Grid>


                        </Box>
                    </Box>
                </Container>

            </div>
        );
    }
}

export default Login;