import React from 'react';
import { Util } from '../../../Util';

export class Tooltip extends React.Component {
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
        const { body } = this.props;
        return (
            <div className="tooltip" ref="tooltip">
                <div className="tooltip-body">
                    <div className="tooltip-text">{body}</div>
                    <div className="tooltip-background" />
                </div>
            </div>
        );
    }
}
