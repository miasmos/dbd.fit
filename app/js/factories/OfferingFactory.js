import { KillerOfferings, SurvivorOfferings, SharedOfferings } from '../data';
import { Offering } from '../models';
import { ModelFactory } from './base';

class OfferingFactoryClass extends ModelFactory {
    constructor(offerings) {
        super(Offering, offerings);
    }
}

class KillerOfferingFactoryClass extends OfferingFactoryClass {
    constructor() {
        super(KillerOfferings);
    }
}

export const KillerOfferingFactory = new KillerOfferingFactoryClass();

class SurvivorOfferingFactoryClass extends OfferingFactoryClass {
    constructor() {
        super(SurvivorOfferings);
    }
}

export const SurvivorOfferingFactory = new SurvivorOfferingFactoryClass();

class SharedOfferingFactoryClass extends OfferingFactoryClass {
    constructor() {
        super(SharedOfferings);
    }
}

export const SharedOfferingFactory = new SharedOfferingFactoryClass();
