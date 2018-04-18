import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { Util } from '../../../Util';

export class SurvivorTooltip extends React.Component {
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
        const { survivor } = this.props;
        const perks = survivor.perks.map((perk, index) => {
            const isLastPerk = index === survivor.perks.length - 1;
            return (
                <BoldSpan key={index} comma={!isLastPerk} text={perk.name} />
            );
        });

        return (
            <div className="tooltip tooltip-detailed" ref="tooltip">
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
    }
}
