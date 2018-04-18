import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { EnumToString } from '../../EnumToString';
import { i18n } from '../../../i18n';
import { Util } from '../../../Util';

export class PowerTooltip extends React.Component {
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
        const { power } = this.props;
        const subtitle = i18n.text.power;
        const abilities = power.abilities.map((value, index) => (
            <li key={index}>{TextInterpolator.get(value)}</li>
        ));

        return (
            <div
                className="tooltip tooltip-detailed power-tooltip"
                ref="tooltip"
            >
                <div className="tooltip-banner">
                    <h3 className="tooltip-title">{power.name}</h3>
                    <p className="tooltip-subtitle">{subtitle}</p>
                </div>
                <div className="tooltip-body">
                    <div className="tooltip-text">
                        {TextInterpolator.get(power.description)}
                        <ul>{abilities}</ul>
                    </div>
                    {!!power.flavor && (
                        <div className="tooltip-flavor">{power.flavor}</div>
                    )}
                    <div className="tooltip-background" />
                </div>
            </div>
        );
    }
}
