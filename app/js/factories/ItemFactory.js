import { Items } from '../data';
import { Item } from '../models';
import { ModelFactory } from './base';

class ItemFactoryClass extends ModelFactory {
    constructor(items) {
        super(Item, items);
    }
}

export const ItemFactory = new ItemFactoryClass();
