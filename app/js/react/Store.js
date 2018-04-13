import { observable, toJS } from 'mobx';
import { Types, ModifierTypes } from '../data';
import { Perk } from '../models/Perk';
import { Offering } from '../models/Offering';
import { Addon } from '../models/Addon';
import { Player } from '../models/Player';
import { Power } from '../models/Power';
import { Item } from '../models/Item';
import * as Factories from '../factories';

const isDevelopment = process.env.NODE_ENV === 'development';

export const Store = observable({
    player: undefined,
    power: new Item(),
    type: undefined,
    perks: observable([new Perk(), new Perk(), new Perk(), new Perk()]),
    offering: new Offering(),
    addons: observable([new Addon(), new Addon()]),
    context: ModifierTypes.PERK,
    title: 'Loadout',
    target: 0,
    valid: false,
    page: 0
});

Store.setPlayer = player => {
    if (typeof player === 'string' || typeof player === 'undefined') {
        player = Factories.AllPlayerFactory.get(player);
    }
    if (player.type === Types.KILLER) {
        Store.setPower(player.power);
    }
    Store.player = player;
    Store.log('setPlayer', Store.player);
};

Store.setType = type => {
    Store.type = type;
    Store.log('setType', Store.type);
};

Store.setPerk = (index, _perk) => {
    if (index > 3 || index < 0 || Store.hasPerk(_perk)) {
        return;
    }

    let perk;
    if (typeof _perk === 'string') {
        perk = Factories.AllPerkFactory.get(_perk);
    } else {
        perk = Factories.AllPerkFactory.get(_perk.index);
        perk.setTier(_perk.tier);
        _perk.setTier(3);
    }

    perk.freeze();
    Store.perks[index] = perk;
    Store.setValidity(true);
    Store.log('setPerk', index, toJS(Store.perks[index]));
};

Store.setOffering = offering => {
    if (typeof offering === 'string' || typeof offering === 'undefined') {
        offering = Factories.AllOfferingFactory.get(offering);
    }
    Store.offering = offering;
    Store.setValidity(true);
    Store.log('setOffering', Store.offering);
};

Store.setPower = power => {
    if (typeof power === 'string') {
        power =
            Store.type === Types.KILLER
                ? Factories.PowerFactory.get(power)
                : Factories.ItemFactory.get(power);
    }
    Store.power = power;
    if (Store.type === Types.SURVIVOR) {
        Store.setValidity(true);
    }
    Store.log('setPower', Store.power);
};

Store.setAddon = (index, addon) => {
    if (typeof addon === 'string' || typeof addon === 'undefined') {
        addon = Factories.AllAddonFactory.get(addon);
    }
    if (index > 1 || index < 0 || Store.hasAddon(addon)) {
        return;
    }
    Store.addons[index] = addon;
    Store.setValidity(true);
    Store.log('setAddon', index, Store.addons[index]);
};

Store.setPage = page => {
    Store.page = page;
    Store.log('setPage', page);
};

Store.setTitle = title => {
    Store.title = title;
    Store.log('setTitle', title);
};

Store.titleIsValid = (title = Store.title) => {
    return title.length > 0 && title.length <= 30;
};

Store.select = obj => {
    switch (Store.context) {
        case ModifierTypes.ADDON:
            Store.setAddon(Store.target, obj);
            break;
        case ModifierTypes.PERK:
            Store.setPerk(Store.target, obj);
            break;
        case ModifierTypes.OFFERING:
            Store.setOffering(obj);
            break;
        case ModifierTypes.ITEM:
            Store.setPower(obj);
            break;
    }
};

Store.setContext = context => {
    if (context === Store.context) {
        return false;
    }
    Store.setPage(0);

    switch (context) {
        case ModifierTypes.ADDON:
        case ModifierTypes.ITEM:
        case ModifierTypes.OFFERING:
        case ModifierTypes.PERK:
            Store.context = context;
            break;
        default:
            console.error(
                `Tried to set an invalid loadout context: ${context}`
            );
    }

    Store.log('setContext', Store.context);
    return true;
};

Store.setTarget = target => {
    let isValid = true;
    switch (Store.context) {
        case ModifierTypes.ADDON:
            if (target < 0 || target > 1) {
                isValid = false;
            } else {
                Store.target = target;
            }
            break;
        case ModifierTypes.PERK:
            if (target < 0 || target > 3) {
                isValid = false;
            } else {
                Store.target = target;
            }
            break;
        case ModifierTypes.ITEM:
        case ModifierTypes.OFFERING:
            if (target !== 0) {
                isValid = false;
            } else {
                Store.target = target;
            }
            break;
    }

    Store.log('setTarget', Store.target);
};

Store.hasPerk = perk => {
    return (
        Store.perks.filter((value, index) => {
            return (
                (!!value &&
                    (value.index === perk.index && index !== Store.target)) ||
                (value.tier === perk.tier &&
                    value.index === perk.index &&
                    index === Store.target)
            );
        }).length > 0
    );
};

Store.hasAddon = addon => {
    return (
        Store.addons.filter(value => {
            return !!value && value.index === addon.index;
        }).length > 0
    );
};

Store.setValidity = validity => {
    Store.valid = validity;
    Store.log('setValidity', Store.valid);
};

Store.log = (...params) => {
    if (isDevelopment) {
        console.log(...params);
    }
};
if (isDevelopment) {
    const logger = require('mobx-logger');
    logger.enableLogging();
    Store.log('init store', toJS(Store));
}
