import React from 'react'
import { AppBar, Toolbar, TextField, Container, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: 400
    },
    button: {
        margin: '0 50%',
        width: 100,
        fontFamily: 'Helvetica Neue',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        fontSize: 35
    }
}));

export default function AddEdit(props) {
    const classes = useStyles()
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        {props.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <div style={{ display: 'flex', width: '300px', margin: '150px 50px' }}>
                    <div style={{ marginRight: "200px", marginLeft: "100px" }}>
                        <TextField id="outlined-basic" label="Title" variant="outlined" className={classes.textField} style={{ margin: "30px 0px" }} />
                        <TextField id="outlined-basic" label="Description" variant="outlined" className={classes.textField} style={{ margin: "30px 0px" }} />
                        <TextField id="outlined-basic" label="Tags" variant="outlined" className={classes.textField} style={{ margin: "30px 0px" }} />
                    </div>
                    <div style={{ border: '1px solid gray' }}>
                        <div><img src="https://t3.ftcdn.net/jpg/01/80/31/10/240_F_180311099_Vlj8ufdHvec4onKSDLxxdrNiP6yX4PnP.jpg" alt="add" width="400px" height="300px" /></div>
                        <TextField id="outlined-basic" label="Image Link" variant="outlined" className={classes.textField} />
                    </div>
                </div>
            </Container>
            <Button variant="contained" color="primary" className={classes.button}>
                Save</Button>
        </>
    )
}