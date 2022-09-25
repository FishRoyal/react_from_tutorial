import React from "react";
import "./app.less"
import Main from "./main/Main.jsx"
import { BrowserRouter , Route, Routes} from "react-router-dom";


export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}