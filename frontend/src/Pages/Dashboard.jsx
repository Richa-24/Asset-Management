import React, { useState, useEffect } from "react";
import CardDrag from "./Card";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { assetsRequestCall, sortCards } from "../Redux/action";
import { Card, CardContent, Container, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import EditDeleteOnHover from "../Components/EditDeleteOnHover";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        float: 'left',
        width: 300,
        margin: '30px'

    }
}));

export default function Dashboard() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const { lists } = useSelector((state) => state);
    const [isHovering, setIsHovering] = useState(false);
    const [updatedList, setUpdateList] = useState(lists || [])

    useEffect(() => {
        dispatch(assetsRequestCall());

    }, []);

    useEffect(() => {
        setUpdateList(lists)
    }, [lists])


    const handleMouseHover = (id) => {
        setIsHovering(!isHovering);
        console.log(id);
    };

    const moveCard = (id, index) => {
        const cards = lists;
        const sourceCard = cards.find((card) => card.id === id);
        const sortedCards = cards.filter((card) => card.id !== id);

        sortedCards.splice(index, 0, sourceCard);
        setUpdateList(sortedCards)

    };

    const saveOrder = () => {
        dispatch(sortCards(updatedList));
    }

    const handleCancle = () => {
        setUpdateList(lists)
    }

    return (
        <>
            <Navbar />
            <div>
                <button onClick={saveOrder}>Save</button>
                <button onClick={handleCancle}>Cancel</button>
            </div>
            {updatedList.map((item, i) => {
                return (
                    <Container>
                        <CardContent>
                            <Container>
                                <Card className={classes.root}>
                                    <CardDrag index={i} moveCard={moveCard} item={item} />
                                </Card>
                            </Container>
                        </CardContent>
                    </Container>
                );
            })}
        </>
    );
}
