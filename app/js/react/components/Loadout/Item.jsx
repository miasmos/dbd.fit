import React from 'react';
import { EnumToString } from '../../EnumToString';
import { ItemTooltip } from '../Tooltips';

export class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            showTooltip: false
        };
    }

    render() {
        let backgroundPath, iconPath, rarityText;

        const { item } = this.props;

        if (item.empty) {
            backgroundPath = `images/template_addon_empty.png`;
        } else {
            rarityText = EnumToString.rarity(item.rarity);
            backgroundPath = `images/template_addon_${rarityText
                .toLowerCase()
                .replace(/\s/, '')}.png`;
            iconPath = `images/items/${item.image}.png`;
        }

        return (
            <div
                className={`item ${
                    this.state.showTooltip ? 'show-tooltip' : ''
                } ${this.props.selected ? 'selected' : ''}`}
            >
                <div
                    className="hitbox"
                    onClick={this.onClick.bind(this)}
                    onMouseOver={this.onMouseOver.bind(this)}
                    onMouseOut={this.onMouseOut.bind(this)}
                />
                {!item.empty && (
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
                {!item.empty && <ItemTooltip item={item} />}
            </div>
        );
    }

    onClick() {
        this.props.onClick(this.props.item, this.props.index);
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
