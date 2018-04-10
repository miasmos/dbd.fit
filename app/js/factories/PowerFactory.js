import { Powers } from '../data';
import { ModelFactory } from './base';
import { Power } from '../models/Power';

class PowerFactoryClass extends ModelFactory {
    constructor() {
        super(Power, Powers);
    }
}

export const PowerFactory = new PowerFactoryClass();
