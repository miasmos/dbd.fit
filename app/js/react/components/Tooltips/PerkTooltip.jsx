import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { EnumToString } from '../../EnumToString';
import { i18n } from '../../../i18n';
import { Config } from '../../../services';
import { Util } from '../../../Util';

export class PerkTooltip extends React.Component {
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
        const { perk } = this.props;
        const rarity = EnumToString.rarity(perk.rarity);
        const subtitle = `${rarity} ${
            !perk.owner.empty ? perk.owner.name + ' ' : ''
        }${i18n.text.perk}`;
        const rarityClass = rarity.toLowerCase().replace(/\s/, '');

        return (
            <div
                className="tooltip tooltip-detailed perk-tooltip"
                ref="tooltip"
            >
                <div
                    className={`tooltip-banner tier${perk.tier} ${rarityClass}`}
                >
                    <h3 className="tooltip-title">{perk.name}</h3>
                    <p className="tooltip-subtitle">{subtitle}</p>
                    <div className="ticks">
                        <img
                            className="tick tick1"
                            src={`${Config.basePath}images/Point_Tick.png`}
                        />
                        <img
                            className="tick tick2"
                            src={`${Config.basePath}images/Point_Tick.png`}
                        />
                        <img
                            className="tick tick3"
                            src={`${Config.basePath}images/Point_Tick.png`}
                        />
                    </div>
                </div>
                <div className="tooltip-body">
                    <div className="tooltip-text">
                        {TextInterpolator.get(perk.description)}
                    </div>
                    {!!perk.flavor && (
                        <div className="tooltip-flavor">{perk.flavor}</div>
                    )}
                    <div className="tooltip-background" />
                </div>
            </div>
        );
    }
}
