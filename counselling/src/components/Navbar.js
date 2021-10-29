import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar(props) {

    return (
        <>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}
                                onClick={() => window.location.replace("/")} style={{cursor: "pointer"}}>
                        General Counselling
                    </Typography>

                    {localStorage.getItem("staff") === null && localStorage.getItem("admin") === null &&
                        <Button variant={"danger"} onClick={() => window.location.replace("/staff")}>LogIn</Button>
                    }

                    {(localStorage.getItem("admin") === "true")&&
                    <Button variant={"danger"} style={{color: "white"}} onClick={() => window.location.replace("/admin")}>Home</Button>}

                    {(localStorage.getItem("staff") !== null)&&
                    <Button variant={"danger"} style={{color: "white"}} onClick={() => window.location.replace("/staff")}>Home</Button>}

                    {(localStorage.getItem("staff") !== null || localStorage.getItem("admin") !== null )&&
                    <Button variant={"danger"} style={{color: "white"}} onClick={props.logout}>LogOut</Button>}

                </Toolbar>
            </AppBar>
        </>
    );
}
