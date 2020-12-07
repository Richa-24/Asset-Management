import React, { useState, useEffect } from "react";
import CardDrag from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { assetsRequestCall } from "../Redux/action";
import { Card, CardContent, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../Components/Navbar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        float: 'left',
        width: 350,
        margin: '10px',
        maxHeight: 280
    }
}));

export default function Dashboard() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const { lists } = useSelector((state) => state);
    const [updatedList, setUpdateList] = useState(lists)

    useEffect(() => {
        dispatch(assetsRequestCall());
    }, []);

    useEffect(() => {
        setUpdateList(lists)
    }, [lists])

    const moveCard = (id, index) => {
        const cards = lists;
        const sourceCard = cards.find((card) => card.id === id);
        const sortedCards = cards.filter((card) => card.id !== id);

        sortedCards.splice(index, 0, sourceCard);
        setUpdateList(sortedCards)
    };

    return (
        <>
            <Navbar />
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
