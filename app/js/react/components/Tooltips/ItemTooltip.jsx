import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { EnumToString } from '../../EnumToString';
import { i18n } from '../../../i18n';
import { Util } from '../../../Util';

export class ItemTooltip extends React.Component {
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
        const { item } = this.props;
        const rarity = EnumToString.rarity(item.rarity);
        const itemType = !!item.owner
            ? item.owner.power.name
            : EnumToString.itemType(item.type);
        const subtitle = `${rarity} ${itemType} ${i18n.text.item}`;
        const rarityClass = rarity.toLowerCase().replace(/\s/, '');
        const abilities = item.abilities.map((value, index) => (
            <li key={index}>{TextInterpolator.get(value)}</li>
        ));

        return (
            <div
                className="tooltip tooltip-detailed item-tooltip"
                ref="tooltip"
            >
                <div className={`tooltip-banner ${rarityClass}`}>
                    <h3 className="tooltip-title">{item.name}</h3>
                    <p className="tooltip-subtitle">{subtitle}</p>
                </div>
                <div className="tooltip-body">
                    <div className="tooltip-text">
                        {TextInterpolator.get(item.description)}
                        <ul>{abilities}</ul>
                    </div>
                    {!!item.flavor && (
                        <div className="tooltip-flavor">{item.flavor}</div>
                    )}
                    <div className="tooltip-background" />
                </div>
            </div>
        );
    }
}
