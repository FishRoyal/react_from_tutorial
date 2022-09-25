import React from "react"
import "./repo.less"

const Repo = (props) => {
    const repo = props.repo;
    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name">{repo.name.length > 21 ? repo.name.substring(0,21) + '...' : repo.name}</div>
                <div className="repo-header-stars">{repo.stargazers_count + ' ★'}</div>
            </div>
            <div className="repo-last-commit">{repo.updated_at.split('T')[0]}</div>
            <a href={repo.html_url} className="repo-link">Ссылка на репозиторий</a>
        </div>
    )
}

export default Repo;