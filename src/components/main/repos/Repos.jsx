import React from "react"
import "./repos.less"
import Repo from "../repo/Repo.jsx"
import { setPage } from "../../../reducers/todosSlice"
import { useDispatch } from "react-redux"

const Repos = (repos) => {
    const dispatch = useDispatch()
    const currentPage = repos.repos.currentPage;
    //const totalCount = repos.repos.totalCount;
    const pages = Array.from({length: 10}, (_, index) => index + 1);
    return (
        <div className="container">
            <div className="repos">
            {
                repos.repos.items.map((repo, index) => 
                    <Repo repo={repo} key={index}/>
                )
            }
            </div>
            <div className="pages">
            {
                pages.map((page, index) => 
                    <span key={index} 
                        className={
                            page == currentPage ? 
                            "current-page" : 
                            "page"
                        }
                        onClick={() => dispatch(setPage(page))}>
                        {page}
                    </span>
                )
            }
            </div>
        </div>
    )
}

export default Repos;