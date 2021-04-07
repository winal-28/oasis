import React from 'react'
import { SiGithub } from "react-icons/si"

export const NavBar = () => {

    const navLinks = document.querySelector('.navLinks');

    const show = () => {
        navLinks?.classList.toggle('navLinksShow')
        console.log("Sample Text")
    }

    return (
        <nav>
            <img src="./oasislogo.png" alt="oasis logo"className="logo" />
            <ul className="navLinks">
                <li><a href="#" className="navLink">Submit</a></li>
                <li><a href="#" className="navLink">Sign Up/In</a></li>
                <li><a href="#" className='navLink'><SiGithub className="icon"/></a></li>
            </ul>
            <h2 className="hamburger" onClick={show}>☰</h2>
        </nav>
    )
}
