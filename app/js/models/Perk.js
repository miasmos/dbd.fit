import { Rarities, Types } from '../data';
import { KillerFactory, SurvivorFactory } from '../factories';
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
    }) {
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
        this.image = `images/perks/${image}.png`;
        this.tier;
        this.rarity;
        this.owner;
        this.type;
    }

    initialize() {
        this._setOwner(this.data.owner);
        this._setRarity(this.data.rarity);
        this._setDescription(this.data.description);
        this.tier(3);
        super.initialize();
    }

    tier(tier) {
        if (tier < 0 && tier > 3) {
            return;
        }
        this.tier = tier;
        this.description = this.descriptions[tier - 1];
        this.rarity = this.rarities[tier - 1];

        return this;
    }

    _setDescription(description) {
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
        const isKiller = KillerFactory.exists(owner);

        if (isKiller) {
            this.type = Types.KILLER;
            this.owner = KillerFactory.get(owner);
        } else {
            this.type = Types.SURVIVOR;
            this.owner = SurvivorFactory.get(owner);
        }
    }

    _setRarity(rarity) {
        this.rarities = rarity.map(value => Rarities[value]);
    }
}
