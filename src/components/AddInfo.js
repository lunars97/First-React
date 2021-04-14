import React, { useState } from "react";
import "./AddInfo.css";

const AddInfo = (props) => {
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");

    function handleClick() {
        let newCards = {
            title: title,
            body: body,
            id: Date.now(),
        };
        props.handleContact(newCards);
        setTitle("");
        setBody("");
    }
    // function inputValue() {
    //     if (title.value("") || body.value("")) {
    //         return;
    //     }
    // }

    return (
        <>
            <div className="text-inp">
                <input
                    className="input"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    value={title}
                    required
                ></input>
                <input
                    className="input"
                    placeholder="Content"
                    onChange={(e) => setBody(e.target.value)}
                    type="text"
                    value={body}
                    requered
                ></input>
                <button className="btnAdd" onClick={() => handleClick()}>
                    Documentation ➜
                </button>
            </div>
        </>
    );
};

export default AddInfo;
