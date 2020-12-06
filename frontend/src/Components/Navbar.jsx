import React from 'react'
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        fontSize: 35
    },
    image: {
        width: 50,
        height: 50,
    }
}));

export default function Navbar() {
    const classes = useStyles()

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Asset Manager
                    </Typography>
                    <Link to="/addImage" ><img src="add-image.png" alt="addImage" className={classes.image} /></Link>
                </Toolbar>
            </AppBar>
        </>
    )
}