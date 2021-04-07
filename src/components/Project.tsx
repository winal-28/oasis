import React from 'react'

export const Project = () => {
    return (
        <div className="project">
            <div className="projData">
                <img src="./photoshoppedcatlmfao.jpg" alt="The organization's profile picture" className="pfp"/>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="title">orgName/<h4 className="repoName">Repo-Name</h4></a>
            </div>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, necessitatibus!</p>
            <div className="langsUsed">
                <h5>TypeScript</h5>
                <h5>Sass</h5>
                <h5>HTML</h5>
            </div>
        </div>
    )
}
