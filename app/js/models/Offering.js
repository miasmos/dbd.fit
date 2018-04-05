import { Rarities } from '../data';
import { Model } from './Model';

export class Offering extends Model {
    constructor({ index, name, rarity, description, flavor, image }) {
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
        this.image = `images/offerings/${image}.png`;
        this.rarity = Rarities[rarity];
    }
}
