import React from "react";
import "./Cards.css";

const Cards = (props) => {
    console.log(props.card);
    return (
        <div className="div">
            {props.card.map((item, index) => (
                <div className="list">
                    <div className="inner-div" key={item.id}>
                        <span className="title">{item.title}</span>

                        <p>{item.body}</p>
                    </div>
                    <button
                        className="edit"
                        onClick={() => props.handleEdit(index)}
                    >
                        Edit
                    </button>
                    <button
                        className="delete"
                        onClick={() => props.handleDelete(item.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cards;
