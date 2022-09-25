import React from "react";
import "./app.less"
import Main from "./main/Main.jsx"
import Navbar from "./navbar/Navbar.jsx";
import { BrowserRouter , Link, Route, Routes} from "react-router-dom";
import Root from "./root/Root.jsx"
export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Root/>}/>
                    <Route path="/repos" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}