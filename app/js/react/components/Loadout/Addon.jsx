import React from 'react';
import { EnumToString } from '../../EnumToString';
import { AddonTooltip } from '../Tooltips';

export class Addon extends React.Component {
    constructor() {
        super();
        this.state = {
            showTooltip: false
        };
    }

    render() {
        let backgroundPath, iconPath, rarityText;

        const { addon } = this.props;

        if (addon.empty) {
            backgroundPath = `images/template_addon_empty.png`;
        } else {
            rarityText = EnumToString.rarity(addon.rarity);
            backgroundPath = `images/template_addon_${rarityText
                .toLowerCase()
                .replace(/\s/, '')}.png`;
            iconPath = `images/addons/${addon.image}.png`;
        }

        return (
            <div
                className={`addon ${
                    this.state.showTooltip ? 'show-tooltip' : ''
                } ${this.props.selected ? 'selected' : ''}`}
            >
                <div
                    className="hitbox"
                    onClick={this.onClick.bind(this)}
                    onMouseOver={this.onMouseOver.bind(this)}
                    onMouseOut={this.onMouseOut.bind(this)}
                />
                {!addon.empty && (
                    <div className="foreground">
                        <img src={iconPath} />
                    </div>
                )}
                <div className="background">
                    <div className="hover">
                        <img
                            className="top"
                            src="images/profile-outline-horizontal.png"
                        />
                        <img
                            className="bottom"
                            src="images/profile-outline-horizontal.png"
                        />
                        <img
                            className="left"
                            src="images/profile-outline-horizontal.png"
                        />
                        <img
                            className="right"
                            src="images/profile-outline-horizontal.png"
                        />
                    </div>
                    <img className="select" src="images/addon_selected.png" />
                    <img className="rarity" src={backgroundPath} />
                </div>
                {!addon.empty && <AddonTooltip addon={addon} />}
            </div>
        );
    }

    onClick() {
        this.props.onClick(this.props.addon, this.props.index);
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
