import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { useDrag, useDrop } from 'react-dnd'
import { useSelector, useDispatch } from 'react-redux';
import { assetsRequestCall } from '../Redux/action';
import { Card, CardContent, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditDeleteOnHover from '../Components/EditDeleteOnHover';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        height: 250,
        display: 'flex',
        flexWrap: 'wrap',
        float: "left",
        margin: "25px"
    }

});

export default function Dashboard() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { lists } = useSelector((state) => state)
    const [isHovering, setIsHovering] = useState(false)
    // const [{ isDragging }, drag] = useDrag({
    //     item: { type: any },
    //     colect: (monitor) => ({
    //         isDragging: !!monitor.isDragging()
    //     })
    // })

    useEffect(() => {
        dispatch(assetsRequestCall())
    }, [])
    console.log(lists)

    const handleMouseHover = (id) => {
        setIsHovering(!isHovering)
        console.log(id)
    }

    return (
        <>
            {lists.map((item) => {
                return (
                    <Container>
                        <CardContent>
                            {/* <DndProvider backend={HTML5Backend}> */}

                            <Card className={classes.root}
                            // ref={drag} style={{
                            //     opacity: isDragging ? 0.5 : 1,
                            //     fontSize: 25,
                            //     fontWeight: 'bold',
                            //     cursor: 'move',
                            // }}
                            >
                                <div style={{ display: "flex" }}>
                                    <Link to={`/${item.id}`} ><img src={item.imageURL} alt={item.title} width="300px" height="220px"
                                        onMouseEnter={() => handleMouseHover(item.id)}
                                        onMouseLeave={() => handleMouseHover(item.id)} />
                                    </Link>

                                    <div>
                                        {isHovering ? <EditDeleteOnHover /> : null}
                                    </div>
                                </div>
                            </Card>
                            {/* </DndProvider> */}
                        </CardContent>
                    </Container>
                )
            })}
        </>
    )
}