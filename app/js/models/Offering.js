import { Rarities, ModifierTypes } from '../data';
import { Model } from './Model';

export class Offering extends Model {
    constructor({ index, name, rarity, description, flavor, image } = {}) {
        super({
            index,
            name,
            rarity,
            description,
            flavor,
            image
        });
        this.index = index;
        this.name = name;
        this.flavor = flavor;
        this.description = description;
        this.image = image;
        this.rarity = Rarities[rarity];
        this.modifierType = ModifierTypes.OFFERING;
    }
}
