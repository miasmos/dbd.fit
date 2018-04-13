import { Rarities, Types, ModifierTypes, ItemTypes } from '../data';
import { Model } from './Model';
import { KillerFactory, SurvivorFactory } from '../factories';

export class Addon extends Model {
    constructor({
        index,
        name,
        rarity,
        description,
        image,
        owner,
        type,
        id
    } = {}) {
        super({
            index,
            name,
            rarity,
            description,
            image,
            owner,
            type,
            id
        });
        this.id = id;
        this.index = index;
        this.name = name;
        this.description = description;
        this.image = image;
        this.rarity = Rarities[rarity];
        this.owner;
        this.type = !!type ? ItemTypes[type] : ItemTypes.EMPTY;
        this.modifierType = ModifierTypes.ADDON;
    }

    initialize() {
        if (!this.empty) {
            this._setOwner(this.data.owner);
            super.initialize();
        }
    }

    _setOwner(owner) {
        if (!!owner) {
            const isKiller = KillerFactory.exists(owner);

            if (isKiller) {
                this.type = Types.KILLER;
                this.owner = KillerFactory.get(owner);
            } else {
                this.type = Types.SURVIVOR;
                this.owner = SurvivorFactory.get(owner);
            }
        } else {
            this.owner = owner;
        }
    }
}
