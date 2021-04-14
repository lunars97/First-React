import React, { useState } from "react";
import "./ModalWindow.css";

const ModalWindow = (props) => {
    const [itemTitle, setItemTitle] = useState(props.editItem.img);
    const [itemBody, setItemBody] = useState(props.editItem.name);

    function handleSave() {
        const newDoc = {
            ...props.editItem,
            title: itemTitle,
            body: itemBody,
        };

        props.handleSaveTask(newDoc);
        console.log(newDoc);
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <button className="close-btn" onClick={props.handleCloseModal}>
                    ✖️
                </button>
                <div className="close">
                    <input
                        onChange={(e) => setItemTitle(e.target.value)}
                        value={itemTitle}
                        type="text"
                        placeholder="Title"
                        className="editTitle"
                    />
                    <input
                        onChange={(e) => setItemBody(e.target.value)}
                        value={itemBody}
                        type="text"
                        className="editBody"
                        placeholder="Content"
                    />
                    <br></br>
                    <button className="edit-btn" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
