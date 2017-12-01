import React from 'react'
import Tooltip from './Tooltip'

const TypeSelector = ({entered, typeSelected, onKillerSelected, onSurvivorSelected}) => (
    <div className={'type-selector' + (entered && !typeSelected ? ' fade-in' : '') + (typeSelected ? ' fade-out' : '')}>
        <div className="selection tooltip-activator" onClick={onSurvivorSelected}>
            <img src="../images/IconHelpLoading_survivor.png" />
            <Tooltip body="Play as survivor" />
        </div>
        <div className="selection tooltip-activator" onClick={onKillerSelected}>
            <img src="../images/IconHelpLoading_killer.png" />
            <Tooltip body="Play as killer" />
        </div>
    </div>
)

export default TypeSelector