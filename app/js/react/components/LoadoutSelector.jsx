import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { ModifierTypes, Types } from '../../data';
import { Addon, Item, Offering, Perk, Inventory, Power } from './Loadout';
import * as Factories from '../../factories';
import { TitleEditor } from './TitleEditor';
import { i18n } from '../../i18n';
import { EnumToString } from '../EnumToString';
import { Menu } from './Menu/Menu';
import { API, Config } from '../../services';
import { LinkDisplay } from './LinkDisplay';

@observer
class LoadoutSelector extends React.Component {
    componentWillMount() {
        const { store, history, match } = this.props;

        if (!store.player) {
            if ('hash' in match.params && !!match.params.hash) {
                API.get({ hash: match.params.hash })
                    .then(json => {
                        this.hydrate(json);
                    })
                    .catch(error => {
                        console.error(error);
                        history.replace('/');
                    });
            } else {
                history.replace('/');
            }
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
            power,
            player,
            editing,
            uri
        } = this.props.store;

        if (!player) {
            return <div className="loadout loading" />;
        }

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
                {editing && (
                    <Menu
                        store={this.props.store}
                        history={this.props.history}
                    />
                )}
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
                            <img
                                className="plus"
                                src={`${Config.basePath}images/plus.png`}
                            />
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
                    {editing && (
                        <img
                            className="loadout-divider"
                            src={`${Config.basePath}images/loadout-divider.png`}
                        />
                    )}
                </div>
                {editing && (
                    <div className="container-bottom">
                        <div className="inventory-container container">
                            {inventoryComponent}
                        </div>
                    </div>
                )}
                {!editing && uri && <LinkDisplay uri={uri} />}
                <img
                    className="loadout-background"
                    src={`${Config.basePath}images/loadout-background.png`}
                />
                {editing && (
                    <img
                        className="inventory-background"
                        src={`${
                            Config.basePath
                        }images/loadout-editing-background.png`}
                    />
                )}
            </div>
        );
    }

    onClick(item, index) {
        if (!this.props.store.editing) {
            return;
        }

        this.props.store.setContext(item.modifierType);
        this.props.store.setTarget(index);
    }

    hydrate({ type, player, power, addons, perks, offering, tiers, name }) {
        const { store } = this.props;

        store.setType(type);
        store.setPlayer(player);
        store.setPower(power);
        store.setOffering(offering);
        store.setTitle(name);
        store.setEditing(false);
        store.setContext(ModifierTypes.NONE);

        perks.map((value, index) => {
            const perk = Factories.AllPerkFactory.get(value);
            perk.setTier(tiers[index]);
            store.setPerk(index, perk);
        });

        addons.map((value, index) => {
            const addon = Factories.AllAddonFactory.get(value);
            store.setAddon(index, addon);
        });
    }
}

export default withRouter(LoadoutSelector);
