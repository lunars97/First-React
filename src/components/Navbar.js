import React from "react";

const Navbar = () => {
    return (
        <>
            <div class="container">
                <div className="navbar">
                    <div className="navbar-left">
                        <span className="logo">
                            Makers<sub>𝕯ocumentation</sub>
                        </span>
                    </div>
                    <div className="nav-right__nav-container">
                        <ul className="nav-right">
                            <li>
                                <a className="main" href="index.html" active>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a className="blog" href="#blog">
                                    Блог
                                </a>
                            </li>
                            <li>
                                <a href="#add" className="addBtn">
                                    Добавить
                                </a>
                            </li>
                            <li>
                                <a href="#github">GitHub</a>
                            </li>
                            <input
                                className="search-inp"
                                type="text"
                                placeholder="search..."
                                name="search"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
