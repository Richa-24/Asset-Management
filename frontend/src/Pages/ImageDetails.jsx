import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { assetRequestCallById } from '../Redux/action'

export default function ImageDetails(props) {
    const dispatch = useDispatch()
    const { imageDetails } = useSelector((state) => state)
    console.log(imageDetails)

    useEffect(() => {
        let id = props.match.params.id
        dispatch(assetRequestCallById(id))
    }, [])
    return (
        <>
            <div>
                <div><img src={imageDetails.imageURL} alt="img" /></div>
                <div>
                    <div>{imageDetails.description}</div>
                </div>
            </div>
        </>
    )
}