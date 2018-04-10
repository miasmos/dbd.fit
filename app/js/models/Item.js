import { Rarities, ModifierTypes, ItemTypes } from '../data';
import { Model } from './Model';

export class Item extends Model {
    constructor({ index, name, rarity, description, image, type } = {}) {
        super({
            index,
            name,
            rarity,
            description,
            image,
            type
        });
        this.index = index;
        this.name = name;
        this.description = description;
        this.image = image;
        this.rarity = Rarities[rarity];
        this.type = !!type ? ItemTypes[type] : ItemTypes.EMPTY;
        this.modifierType = ModifierTypes.ITEM;
    }
}
