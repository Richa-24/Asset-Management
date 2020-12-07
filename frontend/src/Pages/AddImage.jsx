import React, { useState } from 'react'
import { AppBar, Toolbar, TextField, Container, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { postAsset } from '../Redux/action'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    textField: {
        width: 400
    },
    button: {
        margin: '20px',
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

export default function AddImage(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [uploadedBy, setUploadedBy] = useState("")
    const [imageURL, setImageURL] = useState("")
    const history = useHistory()


    const handleSubmit = () => {
        console.log(title, description, uploadedBy, imageURL)
        dispatch(postAsset({ title, description, uploadedBy, imageURL }))
    }

    const handleBack = () => {
        history.push("/")
    }

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Add Image
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>

                <div style={{ display: 'flex', width: '300px', margin: '150px 50px' }}>
                    <div style={{ marginRight: "200px", marginLeft: "100px" }}>
                        <form>
                            <TextField id="outlined-basic" label="Title" variant="outlined" className={classes.textField} style={{ margin: "30px 0px" }} onChange={(e) => setTitle(e.target.value)} />
                            <TextField id="outlined-basic" label="Description" variant="outlined" className={classes.textField} style={{ margin: "30px 0px" }} onChange={(e) => setDescription(e.target.value)} />
                            <TextField id="outlined-basic" label="Uploaded By" variant="outlined" className={classes.textField} style={{ margin: "30px 0px" }} onChange={(e) => setUploadedBy(e.target.value)} />
                        </form>
                    </div>
                    <div style={{ border: '1px solid gray' }}>
                        <div><img src="https://t3.ftcdn.net/jpg/01/80/31/10/240_F_180311099_Vlj8ufdHvec4onKSDLxxdrNiP6yX4PnP.jpg" alt="add" width="400px" height="300px" onChange={(e) => setImageURL(e.target.value)} /></div>
                        <TextField id="outlined-basic" label="Image Link" variant="outlined" className={classes.textField} />
                    </div>
                </div>

            </Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
                    Save</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleBack}>
                    Back</Button>
            </div>
        </>
    )
}