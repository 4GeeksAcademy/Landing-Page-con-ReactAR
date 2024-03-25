import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-pink bg-opacity-75 px-sm-5">
            <div className="container-fluid">
                <a className="navbar-brand text-grey" href="#">Web Artística</a>
                <div className="navbar-nav flex-row">
                    <a className="nav-link mr-sm-3" href="#">Home</a>
                    <a className="nav-link mr-sm-3" href="#">About</a>
                    <a className="nav-link mr-sm-3" href="#">Services</a>
                    <a className="nav-link mr-sm-3" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;



