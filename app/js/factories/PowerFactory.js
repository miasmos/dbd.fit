import { Powers } from '../data';
import { ModelFactory } from './base';
import { Power } from '../models';

class PowerFactoryClass extends ModelFactory {
    constructor() {
        super(Power, Powers);
    }
}

export const PowerFactory = new PowerFactoryClass();
