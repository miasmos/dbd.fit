import React from 'react';
import { observer } from 'mobx-react';
import { ModifierTypes, Types } from '../../../data';
import { EnumToString } from '../../EnumToString';
import {
    KillerPerkFactory,
    SurvivorPerkFactory,
    KillerAddonFactory,
    SurvivorAddonFactory,
    ItemFactory,
    SurvivorOfferingFactory,
    KillerOfferingFactory,
    SharedOfferingFactory
} from '../../../factories';
import { Perk, Addon, Item, Offering } from './';
import { Sort } from '../../../Sort';
import { i18n } from '../../../i18n';

@observer
export class Inventory extends React.Component {
    constructor() {
        super();
        this.pageCount = 0;
    }

    render() {
        const subtitle = !!context
            ? EnumToString.plural(EnumToString.modifierType(context))
            : EnumToString.plural(
                  EnumToString.modifierType(this.props.store.context)
              );

        const { context, type, page } = this.props.store;
        const contextClass = EnumToString.modifierType(context).toLowerCase();
        let components;

        switch (context) {
            case ModifierTypes.PERK:
                components = this.getPerks();
                break;
            case ModifierTypes.ADDON:
                components = this.getAddons();
                break;
            case ModifierTypes.ITEM:
                components = this.getItems();
                break;
            case ModifierTypes.OFFERING:
                components = this.getOfferings();
                break;
        }

        return (
            <div className={`inventory ${contextClass}s`}>
                <h3 className="subtitle">
                    INVENTORY<span>/{subtitle}</span>
                </h3>

                <img
                    src="images/arrow-right.png"
                    className="arrow arrow-left"
                    onClick={this.previous.bind(this)}
                />
                <div className={`inventory-inner page${page + 1}`}>
                    {this.wrap(components)}
                </div>
                <img
                    src="images/arrow-right.png"
                    className="arrow arrow-right"
                    onClick={this.next.bind(this)}
                />
                {this.pageCount > 0 && (
                    <div className="page-indicator">
                        <div className="page-indicator-inner">
                            <span className="page-text">{i18n.text.page}</span>{' '}
                            <span className="num">{page + 1}</span> /{' '}
                            <span className="denom">{this.pageCount}</span>
                        </div>
                        <img
                            className="page-indicator-background"
                            src="images/page-indicator-background.png"
                        />
                    </div>
                )}
            </div>
        );
    }

    wrap(components) {
        let sections = [];
        while (components.length) {
            sections.push(components.splice(0, 15));
        }
        this.pageCount = sections.length;

        return sections.map((value, index) => (
            <div
                className={`page page${index + 1} ${
                    this.props.store.page === index ? 'active' : ''
                }`}
                children={value}
                key={index}
            />
        ));
    }

    getPerks() {
        let perks;

        switch (this.props.store.type || Types.KILLER) {
            case Types.KILLER:
                perks = KillerPerkFactory.toArray();
                break;
            case Types.SURVIVOR:
                perks = SurvivorPerkFactory.toArray();
                break;
        }

        perks = Sort.byPropertyDesc(perks, 'rarity');

        return perks.map((perk, index) => {
            const selected = this.props.store.hasPerk(perk);

            return (
                <Perk
                    perk={perk}
                    selected={selected}
                    key={index}
                    onClick={this.onClick.bind(this)}
                />
            );
        });
    }

    getAddons() {
        let addons;

        switch (this.props.store.type || Types.KILLER) {
            case Types.KILLER:
                addons = KillerAddonFactory.toArray();
                break;
            case Types.SURVIVOR:
                addons = SurvivorAddonFactory.toArray();
                break;
        }

        addons = addons.filter(addon => {
            return this.props.store.type === Types.KILLER
                ? addon.owner.index === this.props.store.player.index
                : addon.type === this.props.store.power.type;
        });

        addons = Sort.byPropertyDesc(addons, 'rarity');

        return addons.map((addon, index) => {
            const selected = this.props.store.hasAddon(addon);

            return (
                <Addon
                    addon={addon}
                    selected={selected}
                    key={index}
                    onClick={this.onClick.bind(this)}
                />
            );
        });
    }

    getItems(type) {
        // assume survivor
        let items = Sort.byPropertyDesc(ItemFactory.toArray(), 'rarity');

        return items.map((item, index) => {
            const selected = this.props.store.power.index === item.index;

            return (
                <Item
                    item={item}
                    selected={selected}
                    key={index}
                    onClick={this.onClick.bind(this)}
                />
            );
        });
    }

    getOfferings(type) {
        let offerings =
            this.props.store.type === Types.KILLER
                ? KillerOfferingFactory.toArray()
                : SurvivorOfferingFactory.toArray();
        offerings = offerings.concat(SharedOfferingFactory.toArray());
        offerings = Sort.byPropertyDesc(offerings, 'rarity');

        return offerings.map((offering, index) => {
            const selected = this.props.store.offering.index === offering.index;

            return (
                <Offering
                    offering={offering}
                    selected={selected}
                    key={index}
                    onClick={this.onClick.bind(this)}
                />
            );
        });
    }

    onClick(obj) {
        this.props.store.select(obj);
    }

    next() {
        const { page, setPage } = this.props.store;
        if (page + 1 >= this.pageCount) {
            setPage(0);
        } else {
            setPage(page + 1);
        }
    }

    previous() {
        const { page, setPage } = this.props.store;
        if (page - 1 < 0) {
            setPage(this.pageCount - 1);
        } else {
            setPage(page - 1);
        }
    }
}
