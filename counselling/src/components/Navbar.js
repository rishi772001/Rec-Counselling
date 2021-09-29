import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar(props) {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}} onClick={() => window.location.replace("/")}>
                        General Counselling
                    </Typography>

                    {localStorage.getItem("staff") === null && localStorage.getItem("admin") === null &&
                        <Button variant={"danger"} onClick={() => window.location.replace("/staff")}>LogIn</Button>
                    }

                    {(localStorage.getItem("staff") !== null || localStorage.getItem("admin") !== null )&&
                    <Button variant={"danger"} onClick={props.logout}>LogOut</Button>}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
