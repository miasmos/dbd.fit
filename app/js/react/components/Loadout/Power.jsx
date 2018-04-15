import React from 'react';
import { PowerTooltip } from '../Tooltips';
import { Config } from '../../../services';

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

        if (!power || power.empty) {
            backgroundPath = `${
                Config.basePath
            }images/template_addon_empty.png`;
        } else {
            backgroundPath = `${
                Config.basePath
            }images/template_addon_common.png`;
            iconPath = `${Config.basePath}images/powers/${power.image}.png`;
        }

        return (
            <div
                className={`power ${
                    this.state.showTooltip ? 'show-tooltip' : ''
                }`}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseOut={this.onMouseOut.bind(this)}
            >
                {!!power &&
                    !power.empty && (
                        <div className="foreground">
                            <img src={iconPath} />
                        </div>
                    )}
                <div className="background">
                    <img src={backgroundPath} />
                </div>
                {!!power &&
                    !power.empty &&
                    this.state.showTooltip && <PowerTooltip power={power} />}
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
