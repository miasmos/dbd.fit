import { Items } from '../data';
import { Item } from '../models/Item';
import { ModelFactory } from './base';

class ItemFactoryClass extends ModelFactory {
    constructor(items) {
        super(Item, Items);
    }
}

export const ItemFactory = new ItemFactoryClass();
