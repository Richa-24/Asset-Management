import React, { useState } from "react";
import { DropTarget, DragSource } from "react-dnd";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Notification from "../Components/Notification";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../Redux/action";

const Card = (props) => {
    const style = props.isDragging
        ? `card text-white border-light text-light`
        : `card text-${props.color}`;
    const { item } = props;

    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: ""
    });

    const { lists } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this Asset?")) {
            let newList = lists.filter((item) => item.id !== id);
            dispatch(deleteCard(newList));

            setNotify({
                isOpen: true,
                message: "Successfully Deleted",
                type: "error"
            });
        }
    };

    return props.connectDropTarget(
        <article className="pt-1 pb-1">
            {props.connectDragSource(
                <div className={style}>
                    <div className="card-body">
                        <div>
                            <Link to={`/view/${item.id}`}>
                                <img
                                    src={item.imageURL}
                                    alt={item.title}
                                    width="350px"
                                    height="220px"
                                />
                            </Link>
                            <div>
                                <div
                                    style={{
                                        fontSize: "20px",
                                        margin: "10px 0px",
                                        paddingLeft: "10px",
                                        float: "left"
                                    }}
                                >
                                    {item.title}
                                </div>
                                <div style={{ float: "right" }}>
                                    <div>
                                        <Link to={`/edit/${item.id}`}>
                                            <EditIcon></EditIcon>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            style={{
                                                border: 0,
                                                background: "white",
                                                outline: "none",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <DeleteIcon></DeleteIcon>
                                        </button>
                                        <Notification notify={notify} setNotify={setNotify} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
};

const typeCard = Symbol.for("@@Type::Card");

const specTarget = {
    drop(props) {
        return {
            id: props.item.id,
            index: props.index
        };
    }
};

const specSource = {
    beginDrag(props) {
        return {
            id: props.item.id
        };
    },
    endDrag(props, monitor) {
        if (!monitor.didDrop()) {
            return;
        }
        const source = monitor.getItem();
        const target = monitor.getDropResult();

        if (source.id === target.id) {
            return;
        }
        props.moveCard(source.id, target.index);
    }
};

const collectTarget = (connect) => ({
    connectDropTarget: connect.dropTarget()
});

const collectSource = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
});

const CardWithDnD = DropTarget(
    typeCard,
    specTarget,
    collectTarget
)(DragSource(typeCard, specSource, collectSource)(Card));

export default CardWithDnD;
