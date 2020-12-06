import React from "react";
import { DropTarget, DragSource } from "react-dnd";
import { Link } from "react-router-dom";

const Card = (props) => {
    const style = props.isDragging
        ? `card text-white border-light text-light`
        : `card text-${props.color}`;
    const { item } = props;

    return props.connectDropTarget(
        <article className="pt-1 pb-1">
            {props.connectDragSource(
                <div className={style}>
                    <div className="card-body">
                        <div style={{ width: "100px", float: "left" }}>
                            <Link to={`/${item.id}`}>
                                <img
                                    src={item.imageURL}
                                    alt={item.title}
                                    width="300px"
                                    height="220px"
                                    style={{ position: "relative" }}
                                />
                            </Link>
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
