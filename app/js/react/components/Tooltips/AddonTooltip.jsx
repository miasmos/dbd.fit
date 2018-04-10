import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { EnumToString } from '../../EnumToString';
import { i18n } from '../../../i18n';

export const AddonTooltip = ({ addon }) => {
    const rarity = EnumToString.rarity(addon.rarity);
    const addonType = !!addon.owner
        ? addon.owner.power.name
        : EnumToString.itemType(addon.type);
    const subtitle = `${rarity} ${addonType} ${i18n.text.addon}`;
    const rarityClass = rarity.toLowerCase().replace(/\s/, '');

    return (
        <div className="tooltip tooltip-detailed addon-tooltip">
            <div className={`tooltip-banner ${rarityClass}`}>
                <h3 className="tooltip-title">{addon.name}</h3>
                <p className="tooltip-subtitle">{subtitle}</p>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text">
                    {TextInterpolator.get(addon.description)}
                </div>
                {!!addon.flavor && (
                    <div className="tooltip-flavor">{addon.flavor}</div>
                )}
                <div className="tooltip-background" />
            </div>
        </div>
    );
};
