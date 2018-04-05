import { Rarities } from '../data';
import { Model } from './Model';

export class Item extends Model {
    constructor({ index, name, rarity, description, image }) {
        super({
            index,
            name,
            rarity,
            description,
            image
        });
        this.index = index;
        this.name = name;
        this.description = description;
        this.image = `images/items/${image}.png`;
        this.rarity = Rarities[value];
    }
}
