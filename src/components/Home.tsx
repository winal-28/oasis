import React from 'react'

export const Home = () => {
    return (
        <main>
            <img src="./oasislogo.png" alt="oasis logo" className="logo" />
            <form action="submit">
                <input type="text" placeholder="Search Projects..." className="search" />
            </form>
        </main>
    )
}
