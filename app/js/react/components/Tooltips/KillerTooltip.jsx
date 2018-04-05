import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { KillerPerkFactory, PowerFactory } from '../../../factories';
import { TextInterpolator } from '../../TextInterpolator';

export const KillerTooltip = ({ killer }) => {
    const perks = killer.perks.map((perk, index) => {
        const isLastPerk = index !== killer.perks.length - 1;
        return <BoldSpan key={index} comma={!isLastPerk} text={perk.name} />;
    });
    const abilities = killer.description.map((value, index) => (
        <li key={index}>{TextInterpolator.get(value)}</li>
    ));

    return (
        <div className="tooltip tooltip-detailed">
            <div className="banner">
                <h2>{killer.name}</h2>
            </div>
            <div className="body">
                <div className="text">
                    Power: <BoldSpan text={killer.power.name} />
                    <ul>
                        {abilities}
                        <li>Teachable Perks: {perks}</li>
                    </ul>
                </div>
                <div className="background" />
            </div>
        </div>
    );
};
