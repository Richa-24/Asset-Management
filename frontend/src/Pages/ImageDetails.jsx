import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import Navbar from '../Components/Navbar'
import { assetRequestCallById } from '../Redux/action'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import ModeCommentTwoToneIcon from '@material-ui/icons/ModeCommentTwoTone';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        marginTop: 50,
        display: 'flex'
    },
    image: {
        width: 500,
        height: 400
    },
    icon: {
        marginRight: 10
    },
    title: {
        fontFamily: 'Helvetica Neue',
        margin: 20,
        letterSpacing: 2,
        fontSize: 30
    },
    description: {
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
        lineHeight: 3,
        letterSpacing: 1,
        margin: 'auto'
    },
    commentSection: {
        marginTop: '50px'
    },
    commentIcon: {
        fontSize: 50
    },
    commentHeading: {
        display: "flex",
        marginTop: 40
    },
    name: {
        marginLeft: 30,
        marginTop: 10
    }

}));

export default function ImageDetails(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { imageDetails } = useSelector((state) => state)

    console.log(imageDetails)
    useEffect(() => {
        let id = props.match.params.id
        dispatch(assetRequestCallById(id))
    }, [])
    return (
        <>
            {/* <Navbar /> */}
            <Container>
                <div className={classes.mainDiv}>
                    <div >
                        <Typography variant="h5" component="h2" className={classes.title}>
                            <FiberManualRecordOutlinedIcon className={classes.icon} /> {imageDetails.title}
                        </Typography>
                        <div><img src={imageDetails.imageURL} alt="img" className={classes.image} /></div>
                    </div>
                    <div className={classes.description}>
                        <div><b>Description: </b>{imageDetails.description}</div>
                        <div><b>Uploaded by: </b>{imageDetails.uploadedBy}</div>
                        <div><b>Created date: </b>{new Date(imageDetails.dateCreated).toLocaleDateString()}</div>
                    </div>
                </div>
                <div>
                    <Typography variant="h5" component="h2" className={classes.commentSection}>
                        <ModeCommentTwoToneIcon className={classes.icon} /> Comments
                        </Typography>
                    <div>
                        <div className={classes.commentHeading}>
                            <div><SupervisedUserCircleOutlinedIcon className={classes.commentIcon} /></div>
                            {/* <Typography variant="h5" component="h2" className={classes.name}>{imageDetails.comments[0].name}</Typography> */}
                        </div>
                    </div>
                    {/* <p style={{ marginLeft: "80px", fontSize: "20px" }}>{imageDetails.comments[0].comment}</p> */}
                </div>
            </Container>
        </>
    )
}