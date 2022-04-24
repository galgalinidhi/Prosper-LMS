import React from 'react'
import '../CSS/Home.css'
import { Link } from 'react-router-dom'
import Image from '../images/Home.jpg'

export default function Home() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">WELCOME TO PROSPER!</h1>
            
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">Log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="signup-btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}