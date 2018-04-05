import { Rarities, Types } from '../data';
import { Model } from './Model';
import { KillerFactory, SurvivorFactory } from '../factories';

export class Addon extends Model {
    constructor({ index, name, rarity, description, image, owner }) {
        super({
            index,
            name,
            rarity,
            description,
            image,
            owner
        });
        this.index = index;
        this.name = name;
        this.description = description;
        this.image = `images/addons/${image}.png`;
        this.rarity = Rarities[rarity];
    }

    initialize() {
        this._setOwner(this.data.owner);
        super.initialize();
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
