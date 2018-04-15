import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { EnumToString } from '../../EnumToString';
import { i18n } from '../../../i18n';

export const OfferingTooltip = ({ offering }) => {
    const rarity = EnumToString.rarity(offering.rarity);
    const subtitle = `${rarity} ${i18n.text.offering}`;
    const rarityClass = rarity.toLowerCase().replace(/\s/, '');
    const abilities = offering.abilities.map((value, index) => (
        <li key={index}>{TextInterpolator.get(value)}</li>
    ));

    return (
        <div className="tooltip tooltip-detailed offering-tooltip">
            <div className={`tooltip-banner ${rarityClass}`}>
                <h3 className="tooltip-title">{offering.name}</h3>
                <p className="tooltip-subtitle">{subtitle}</p>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text">
                    {TextInterpolator.get(offering.description)}
                    <ul>{abilities}</ul>
                </div>
                {!!offering.flavor && (
                    <div className="tooltip-flavor">{offering.flavor}</div>
                )}
                <div className="tooltip-background" />
            </div>
        </div>
    );
};
