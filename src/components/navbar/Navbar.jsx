import React from "react";
import { Link } from "react-router-dom";
import "./navbar.less"

const Navbar = () => {
    return (
        <nav className="nav">
            <Link className="a-nav" to="/">Main page</Link>
            <div className="nav-cont-ul">
                <ul>
                    <Link className="a-nav" to="/repos">Repositories</Link>
                    <Link className="a-nav" to="/news">News</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;