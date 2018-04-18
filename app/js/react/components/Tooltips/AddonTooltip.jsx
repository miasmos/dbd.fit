import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { EnumToString } from '../../EnumToString';
import { i18n } from '../../../i18n';
import { Util } from '../../../Util';

export class AddonTooltip extends React.Component {
    componentDidMount() {
        const tooltip = this.refs.tooltip;
        const bottomClip = Util.isClippingBottom(tooltip),
            rightClip = Util.isClippingRight(tooltip);

        if (bottomClip) {
            tooltip.style.marginTop = `-${bottomClip}px`;
        }
        if (rightClip) {
            tooltip.style.marginLeft = `-${rightClip}px`;
        }
    }

    render() {
        const { addon } = this.props;
        const rarity = EnumToString.rarity(addon.rarity);
        const addonType = !!addon.owner
            ? addon.owner.power.name
            : EnumToString.itemType(addon.type);
        const subtitle = `${rarity} ${addonType} ${i18n.text.addon}`;
        const rarityClass = rarity.toLowerCase().replace(/\s/, '');
        const abilities = addon.abilities.map((value, index) => (
            <li key={index}>{TextInterpolator.get(value)}</li>
        ));

        return (
            <div
                className="tooltip tooltip-detailed addon-tooltip"
                ref="tooltip"
            >
                <div className={`tooltip-banner ${rarityClass}`}>
                    <h3 className="tooltip-title">{addon.name}</h3>
                    <p className="tooltip-subtitle">{subtitle}</p>
                </div>
                <div className="tooltip-body">
                    <div className="tooltip-text">
                        {TextInterpolator.get(addon.description)}
                        <ul>{abilities}</ul>
                    </div>
                    {!!addon.flavor && (
                        <div className="tooltip-flavor">{addon.flavor}</div>
                    )}
                    <div className="tooltip-background" />
                </div>
            </div>
        );
    }
}
