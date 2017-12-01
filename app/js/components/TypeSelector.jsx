import React from 'react'
import Tooltip from './Tooltip'
import { Link } from 'react-router-dom'

const TypeSelector = ({entered, typeSelected, onKillerSelected, onSurvivorSelected}) => (
    <div className="type-selector">
        <Link to="/survivor">
            <div className="selection tooltip-activator" onClick={onSurvivorSelected}>
                <img src="../images/IconHelpLoading_survivor.png" />
                <Tooltip body="Play as survivor" />
            </div>
        </Link>
        <Link to="/killer">
            <div className="selection tooltip-activator" onClick={onKillerSelected}>
                <img src="../images/IconHelpLoading_killer.png" />
                <Tooltip body="Play as killer" />
            </div>
        </Link>
    </div>
)

export default TypeSelector