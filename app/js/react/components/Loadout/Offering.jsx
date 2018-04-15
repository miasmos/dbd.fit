import React from 'react';
import { EnumToString } from '../../EnumToString';
import { OfferingTooltip } from '../Tooltips';
import { Config } from '../../../services';

export class Offering extends React.Component {
    constructor() {
        super();
        this.state = {
            showTooltip: false
        };
    }

    render() {
        let backgroundPath, iconPath, rarityText;

        const { offering } = this.props;

        if (!offering || offering.empty) {
            backgroundPath = `${
                Config.basePath
            }images/template_offering_empty.png`;
        } else {
            rarityText = EnumToString.rarity(offering.rarity);
            backgroundPath = `${
                Config.basePath
            }images/template_offering_${rarityText
                .toLowerCase()
                .replace(/\s/, '')}.png`;
            iconPath = `${Config.basePath}images/offerings/${
                offering.image
            }.png`;
        }

        return (
            <div
                className={`offering ${
                    this.state.showTooltip ? 'show-tooltip' : ''
                } ${this.props.selected ? 'selected' : ''}`}
            >
                <div
                    className="hitbox"
                    onClick={this.onClick.bind(this)}
                    onMouseOver={this.onMouseOver.bind(this)}
                    onMouseOut={this.onMouseOut.bind(this)}
                />
                {!offering.empty && (
                    <div className="foreground">
                        <img src={iconPath} />
                    </div>
                )}
                <div className="background">
                    <div className="hover">
                        <div className="top-left">
                            <img
                                src={`${
                                    Config.basePath
                                }images/profile-outline-horizontal.png`}
                            />
                        </div>
                        <div className="right">
                            <img
                                src={`${
                                    Config.basePath
                                }images/profile-outline-horizontal.png`}
                            />
                        </div>
                        <div className="left">
                            <img
                                src={`${
                                    Config.basePath
                                }images/profile-outline-horizontal.png`}
                            />
                        </div>
                        <div className="bottom-right">
                            <img
                                src={`${
                                    Config.basePath
                                }images/profile-outline-horizontal.png`}
                            />
                        </div>
                    </div>
                    <img
                        className="select"
                        src={`${Config.basePath}images/offering_selected.png`}
                    />
                    <img className="rarity" src={backgroundPath} />
                </div>
                {!!offering &&
                    !offering.empty &&
                    this.state.showTooltip && (
                        <OfferingTooltip offering={offering} />
                    )}
            </div>
        );
    }

    onClick() {
        this.props.onClick(this.props.offering);
    }

    onMouseOver(tier) {
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
