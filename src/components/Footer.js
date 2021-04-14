import React from "react";
import "./Footer.css";
import img from "../img/2021.svg";
import img2 from "../img/makers.svg";
const Footer = () => {
    return (
        <footer>
            <div class="content__footer">
                <img class="logo2" src={img} />
                <div class="row__footer">
                    <div class="first-column">
                        <h4>Lorem Ipsum</h4>
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div class="second-column">
                        <h4>Lorem Ipsum</h4>
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div class="third-column">
                        <h4>Lorem Ipsum</h4>
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>
                <img class="number" src={img2} />
            </div>
        </footer>
    );
};

export default Footer;
