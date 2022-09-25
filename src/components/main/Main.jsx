import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../actions/repos";
import "./main.less"
import Repo from "./repo/Repo.jsx";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    useEffect(() => {
        dispatch(getRepos());
    }, [])
    return (
        <div>
            <h1>Репозитории</h1>
            <div className="container">
            {
                repos.length === 0 ? "" :
                    repos.items.map(repo => 
                        <Repo repo={repo}/>
                    )
            }
            </div>
        </div>
    )
}

export default Main;