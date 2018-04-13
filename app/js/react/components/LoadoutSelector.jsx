import React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { withRouter } from 'react-router-dom';
import { ModifierTypes, Types } from '../../data';
import { Addon, Item, Offering, Perk, Inventory, Power } from './Loadout';
import { TitleEditor } from './TitleEditor';
import { i18n } from '../../i18n';
import { EnumToString } from '../EnumToString';
import { Menu } from './Menu/Menu';

@observer
class LoadoutSelector extends React.Component {
    componentWillMount() {
        const { store, history } = this.props;

        if (!store.player) {
            history.replace('/');
        }
    }

    render() {
        const {
            perks,
            offering,
            addons,
            context,
            target,
            type,
            power
        } = this.props.store;

        const itemComponent = (() => {
            const selected = context === ModifierTypes.ITEM;

            return type === Types.SURVIVOR ? (
                <Item
                    item={power}
                    selected={selected}
                    onClick={this.onClick.bind(this)}
                />
            ) : (
                <Power power={power} />
            );
        })();

        const addonComponents = addons.map((addon, index) => {
            const selected =
                context === ModifierTypes.ADDON && index === target;

            return (
                <Addon
                    addon={addon}
                    selected={selected}
                    key={index}
                    index={index}
                    onClick={this.onClick.bind(this)}
                />
            );
        });

        const offeringComponent = (() => {
            const selected = context === ModifierTypes.OFFERING;
            return (
                <Offering
                    offering={offering}
                    selected={selected}
                    onClick={this.onClick.bind(this)}
                />
            );
        })();

        const perkComponents = perks.map((perk, index) => {
            const selected = context === ModifierTypes.PERK && index === target;

            return (
                <Perk
                    perk={perk}
                    selected={selected}
                    key={index}
                    index={index}
                    onClick={this.onClick.bind(this)}
                />
            );
        });

        const inventoryComponent = <Inventory store={this.props.store} />;

        return (
            <div className="loadout">
                <Menu store={this.props.store} />
                <div className="container-top">
                    <TitleEditor store={this.props.store} />
                    <div className="container-left">
                        <div className="item-container container">
                            <h4 className="subtitle">
                                {type === Types.KILLER
                                    ? i18n.text.power
                                    : i18n.text.item}
                            </h4>
                            <div className="item-inner">{itemComponent}</div>
                            <img className="plus" src="images/plus.png" />
                        </div>
                        <div className="addon-container container">
                            <h4 className="subtitle">
                                {EnumToString.plural(i18n.text.addon)}
                            </h4>
                            <div className="addon-inner">{addonComponents}</div>
                        </div>
                    </div>
                    <div className="container-right">
                        <div className="offering-container container">
                            <h4 className="subtitle">{i18n.text.offering}</h4>
                            <div className="offering-inner">
                                {offeringComponent}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-middle">
                    <div className="perk-container container">
                        <h4 className="subtitle">
                            {EnumToString.plural(i18n.text.perk)}
                        </h4>
                        <div className="perk-inner">{perkComponents}</div>
                    </div>
                    <img
                        className="loadout-divider"
                        src="images/loadout-divider.png"
                    />
                </div>
                <div className="container-bottom">
                    <div className="inventory-container container">
                        {inventoryComponent}
                    </div>
                </div>
                <img
                    className="loadout-background"
                    src="images/loadout-background.png"
                />
            </div>
        );
    }

    onClick(item, index) {
        this.props.store.setContext(item.modifierType);
        this.props.store.setTarget(index);
    }
}

export default withRouter(LoadoutSelector);
