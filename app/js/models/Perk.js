import { Rarities, Types, ModifierTypes } from '../data';
import {
    KillerPerkFactory,
    KillerFactory,
    SurvivorFactory
} from '../factories';
import { Model } from './Model';

export class Perk extends Model {
    constructor({
        index,
        name,
        owner,
        rarity,
        description,
        flavor,
        image,
        tiers
    } = {}) {
        super({
            index,
            name,
            owner,
            rarity,
            description,
            flavor,
            image,
            tiers
        });
        this.index = index;
        this.name = name;
        this.flavor = flavor;
        this.image = image;
        this.tier;
        this.description;
        this.rarity;
        this.owner;
        this.type;
        this.modifierType = ModifierTypes.PERK;
    }

    initialize() {
        if (!this.empty) {
            this._setOwner(this.data.owner);
            this._setRarity(this.data.rarity);
            this._setDescription(this.data.description);
            this.setTier(3);
            super.initialize();
        }
    }

    setTier(tier) {
        if (this.empty || this.frozen || tier < 0 || tier > 3) {
            return;
        }
        this.tier = tier;
        this.description = this.descriptions[tier - 1];
        this.rarity = this.rarities[tier - 1];

        return this;
    }

    _setDescription(description) {
        if (this.frozen) {
            return;
        }
        this.descriptions = [];
        const dSplit = this.data.description.split('%s');

        this.data.tiers.forEach((value, index) => {
            let str = '';

            dSplit.forEach((value1, index1) => {
                const isLast = index1 === dSplit.length - 1;

                if (isLast) {
                    str += `${value1}`;
                } else {
                    str += `${value1}${value[index1]}`;
                }
            });
            this.descriptions.push(str);
        });
    }

    _setOwner(owner) {
        if (this.frozen) {
            return;
        }
        const killerExists = KillerFactory.exists(owner),
            isKillerPerk = KillerPerkFactory.exists(this.index);

        if (killerExists) {
            this.owner = KillerFactory.get(owner);
        } else {
            this.owner = SurvivorFactory.get(owner);
        }

        if (isKillerPerk) {
            this.type = Types.KILLER;
        } else {
            this.type = Types.SURVIVOR;
        }
    }

    _setRarity(rarity) {
        if (this.frozen) {
            return;
        }
        this.rarities = rarity.map(value => Rarities[value]);
    }
}
