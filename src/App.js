import React, { useEffect, useState } from "react";
import AddInfo from "./components/AddInfo";
import Cards from "./components/Cards";
import ModalWindow from "./components/ModalWindow";
import Navbar from "./components/Navbar";
import "./App.css";
import AddImg from "./components/AddImg";
import Footer from "./components/Footer";

// import Navbar from "./components/Navbar";

function App() {
    let [card, setCard] = useState([]);

    let [modal, setModal] = useState(false);
    let [editItem, setEditItem] = useState({});

    function handleContact(obj) {
        console.log(obj);
        let cards = [...card];
        cards.push(obj);
        setCard(cards);
        setItemToStorage(obj);
    }
    useEffect(() => {
        if (!localStorage.getItem("card")) {
            localStorage.setItem("card", "[]");
        }
        setCard(JSON.parse(localStorage.getItem("card")));
    }, []);
    function render() {
        if (!localStorage.getItem("card")) {
            localStorage.setItem("card", "[]");
        }
        let newData = JSON.parse(localStorage.getItem("card"));
        return newData;
    }
    function setItemToStorage(task) {
        if (!localStorage.getItem("card")) {
            localStorage.setItem("card", "[]");
        }
        let data = JSON.parse(localStorage.getItem("card"));
        data.push(task);
        localStorage.setItem("card", JSON.stringify(data));
    }
    function handleDelete(id) {
        let data = JSON.parse(localStorage.getItem("card"));
        let newCard = card.filter((item) => {
            if (item.id !== id) {
                return item.id !== id;
            }
        });
        setCard(newCard);
        localStorage.setItem("card", JSON.stringify(newCard));
    }

    function handleEdit(index) {
        setModal(true);
        setEditItem(card[index]);
    }

    function handleSaveTask(newTask) {
        const newSaveTask = card.map((item) => {
            if (item.id === newTask.id) {
                return newTask;
            }
            return item;
        });
        setCard(newSaveTask);
        handleCloseModal();
    }

    function handleCloseModal() {
        setModal(false);
    }

    return (
        <div className="App">
            <Navbar />
            <AddImg />
            <AddInfo handleContact={handleContact} />
            <Cards
                card={card}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            {modal ? (
                <ModalWindow
                    editItem={editItem}
                    handleSaveTask={handleSaveTask}
                    handleCloseModal={handleCloseModal}
                />
            ) : null}
            <Footer />
        </div>
    );
}

export default App;
