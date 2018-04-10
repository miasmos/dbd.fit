import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { EnumToString } from '../../EnumToString';
import { i18n } from '../../../i18n';

export const ItemTooltip = ({ item }) => {
    const rarity = EnumToString.rarity(item.rarity);
    const itemType = !!item.owner
        ? item.owner.power.name
        : EnumToString.itemType(item.type);
    const subtitle = `${rarity} ${itemType} ${i18n.text.item}`;
    const rarityClass = rarity.toLowerCase().replace(/\s/, '');

    return (
        <div className="tooltip tooltip-detailed item-tooltip">
            <div className={`tooltip-banner ${rarityClass}`}>
                <h3 className="tooltip-title">{item.name}</h3>
                <p className="tooltip-subtitle">{subtitle}</p>
            </div>
            <div className="tooltip-body">
                <div className="tooltip-text">
                    {TextInterpolator.get(item.description)}
                </div>
                {!!item.flavor && (
                    <div className="tooltip-flavor">{item.flavor}</div>
                )}
                <div className="tooltip-background" />
            </div>
        </div>
    );
};
