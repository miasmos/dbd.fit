import React from 'react';
import { Tooltip } from './Tooltips';
import { Link } from 'react-router-dom';

export const TypeSelector = ({
    entered,
    typeSelected,
    onKillerSelected,
    onSurvivorSelected
}) => (
    <div className="type-selector">
        <Link to="/survivor">
            <div
                className="selection tooltip-activator"
                onClick={onSurvivorSelected}
            >
                <img src="../images/IconHelpLoading_survivor.png" />
                <Tooltip body="Play as survivor" />
            </div>
        </Link>
        <Link to="/killer">
            <div
                className="selection tooltip-activator"
                onClick={onKillerSelected}
            >
                <img src="../images/IconHelpLoading_killer.png" />
                <Tooltip body="Play as killer" />
            </div>
        </Link>
    </div>
);
