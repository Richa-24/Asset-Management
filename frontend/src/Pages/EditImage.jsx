import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, TextField, Container, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { assetRequestCallById, editCard } from '../Redux/action'
import { useSelector, useDispatch } from 'react-redux'
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

export default function EditImage(props) {
    const classes = useStyles()
    const { imageDetails } = useSelector((state) => state)
    const { lists } = useSelector((state) => state)
    const [title, setTitle] = useState(imageDetails.title)
    const [description, setDescription] = useState(imageDetails.description)
    const [uploadedBy, setUploadedBy] = useState(imageDetails.uploadedBy)
    const [imageURL, setImageURL] = useState(imageDetails.imageURL)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        let id = props.match.params.id
        dispatch(assetRequestCallById(id))
    }, [])

    const handleEdit = () => {
        let id = props.match.params.id
        let editData = lists.map((item) => item.id)
        let newData = editData.map((item) => item).find((item) => item === id)

        dispatch(editCard({ title, description, uploadedBy, imageURL }))
    }

    const handleBack = () => {
        history.push("/")
    }
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Edit Image
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <div style={{ display: 'flex', width: '300px', margin: '150px 50px' }}>
                    <div style={{ marginRight: "200px", marginLeft: "100px" }}>
                        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" className={classes.textField} style={{ margin: "30px 0px" }} />
                        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} variant="outlined" className={classes.textField} style={{ margin: "30px 0px" }} />
                        <TextField label="Uploaded By" value={uploadedBy} onChange={(e) => setUploadedBy(e.target.value)} variant="outlined" className={classes.textField} style={{ margin: "30px 0px" }} />
                    </div>
                    <div style={{ border: '1px solid gray' }}>
                        <div><img src={imageDetails.imageURL} alt="add" width="400px" height="300px" /></div>
                        <TextField label="Image Link" value={imageURL} onChange={(e) => setImageURL(e.target.value)} variant="outlined" className={classes.textField} />
                    </div>
                </div>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleEdit}>
                    Save</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleBack}>
                    Back</Button>
            </div>
        </>
    )
}