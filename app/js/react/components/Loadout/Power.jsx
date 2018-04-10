import React from 'react';
import { PowerTooltip } from '../Tooltips';

export class Power extends React.Component {
    constructor() {
        super();
        this.state = {
            showTooltip: false
        };
    }

    render() {
        let backgroundPath, iconPath;
        const { power } = this.props;

        if (power.empty) {
            backgroundPath = `images/template_addon_empty.png`;
        } else {
            backgroundPath = `images/template_addon_common.png`;
            iconPath = `images/powers/${power.image}.png`;
        }

        return (
            <div
                className={`power ${
                    this.state.showTooltip ? 'show-tooltip' : ''
                }`}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseOut={this.onMouseOut.bind(this)}
            >
                {!power.empty && (
                    <div className="foreground">
                        <img src={iconPath} />
                    </div>
                )}
                <div className="background">
                    <img src={backgroundPath} />
                </div>
                {!power.empty && <PowerTooltip power={power} />}
            </div>
        );
    }

    onMouseOver() {
        if (!this.state.showTooltip) {
            this.setState({
                showTooltip: true
            });
        }
    }

    onMouseOut() {
        this.setState({
            showTooltip: false
        });
    }
}
