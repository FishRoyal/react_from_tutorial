import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../actions/repos";
import "./main.less"
import Repos from "./repos/Repos.jsx";
import Loader from "./loader/Loader.jsx"

const Main = () => {
    const dispatch = useDispatch();
    const reposObj = useSelector(state => state.repos);
    const isLoaded = reposObj.status == "resolved";
    useEffect(() => {
        dispatch(getRepos({currentPage: reposObj.currentPage, perPage: reposObj.perPage}));
    }, [reposObj.currentPage])
    return (
        <div>
            <h1>Репозитории</h1>
            <div>
                {
                    isLoaded ? <Repos repos={reposObj}/> : <Loader/>
                }
            </div>
        </div>
    )
}

export default Main;