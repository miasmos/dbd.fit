import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';

export const SurvivorTooltip = ({ survivor }) => {
    const perks = survivor.perks.map((perk, index) => {
        const isLastPerk = index === survivor.perks.length - 1;
        return <BoldSpan key={index} comma={!isLastPerk} text={perk.name} />;
    });

    return (
        <div className="tooltip tooltip-detailed">
            <div className="tooltip-banner">
                <h2>{survivor.name}</h2>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text">
                    {survivor.description}
                    <ul>
                        <li>Teachable Perks: {perks}</li>
                    </ul>
                </div>
                <div className="tooltip-background" />
            </div>
        </div>
    );
};
