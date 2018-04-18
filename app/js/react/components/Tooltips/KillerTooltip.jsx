import React from 'react';
import { BoldSpan } from '../HTMLPartials';
import { TextInterpolator } from '../../TextInterpolator';
import { Util } from '../../../Util';

export class KillerTooltip extends React.Component {
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
        const { killer } = this.props;
        const perks = killer.perks.map((perk, index) => {
            const isLastPerk = index === killer.perks.length - 1;
            return (
                <BoldSpan key={index} comma={!isLastPerk} text={perk.name} />
            );
        });
        const abilities = killer.description.map((value, index) => (
            <li key={index}>{TextInterpolator.get(value)}</li>
        ));

        return (
            <div className="tooltip tooltip-detailed" ref="tooltip">
                <div className="tooltip-banner">
                    <h2>{killer.name}</h2>
                </div>
                <div className="tooltip-body">
                    <div className="tooltip-text">
                        Power: <BoldSpan text={killer.power.name} />
                        <ul>
                            {abilities}
                            <li>Teachable Perks: {perks}</li>
                        </ul>
                    </div>
                    <div className="tooltip-background" />
                </div>
            </div>
        );
    }
}
