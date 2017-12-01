import React from 'react'

const Intro = ({entered}) => (
    <div className={'intro' + (entered ? ' entered' : '')}>
        <img src="../images/logo.png" />
        <h3 className="instruction">Click anywhere to continue</h3>
        <h2 className="title">Dead By Daylight</h2>
        <p className="text">Unofficial</p>
        <p className="text">Loadout Builder</p>
    </div>
)

export default Intro