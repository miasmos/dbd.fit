import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => (
    <div className="intro">
        <Link to="/type">
            <img src="../images/logo.png" />
            <h3 className="instruction">Click anywhere to continue</h3>
            <h2 className="title">Dead By Daylight</h2>
            <p className="text">Unofficial</p>
            <p className="text">Loadout Companion</p>
        </Link>
    </div>
)

export default Intro