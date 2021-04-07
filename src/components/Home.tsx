import React from 'react';
import { Project } from './Project';

export const Home = () => {

    return (
        <main>
            <img src="./oasislogo.png" alt="oasis logo" className="logo" />
            <form>
                <input type="text" placeholder="Search Projects..." className="search" />
            </form>
            <div className="filterContainer">
                <button className="filterButton selected">All</button>
                <button className="filterButton">TypeScript</button>
                <button className="filterButton">JavaScript</button>
                <button className="filterButton">C</button>
                <button className="filterButton">HTML</button>
                <button className="filterButton">Java</button>
                <button className="filterButton">Python</button>
                <button className="filterButton">Vue</button>
                <button className="filterButton">PHP</button>
                <button className="filterButton">Svelte</button>
                <button className="filterButton">PowerShell</button>
                <button className="filterButton">CSS</button>
                <button className="filterButton">C++</button>
                <button className="filterButton">Rust</button>
                <button className="filterButton">React</button>
            </div>
            <div className="projects">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </main>
    )
}
