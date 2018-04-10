import { Rarities, Types, ModifierTypes } from '../data';
import { KillerFactory, SurvivorFactory } from '../factories';
import { Model } from './Model';

export class Power extends Model {
    constructor({ index, name, owner, description, abilities, image } = {}) {
        super({ index, name, owner, description, abilities, image });
        this.index = index;
        this.name = name;
        this.image = image;
        this.description = description;
        this.abilities = abilities;
        this.modifierType = ModifierTypes.POWER;
        this.owner;
    }

    initialize() {
        if (!this.empty) {
            this._setOwner(this.data.owner);
            super.initialize();
        }
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
}
