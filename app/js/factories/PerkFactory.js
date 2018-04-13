import { KillerPerks, SurvivorPerks } from '../data';
import { Perk } from '../models/Perk';
import { ModelFactory } from './base';

class PerkFactoryClass extends ModelFactory {
    constructor(perks) {
        super(Perk, perks);
    }
}

class KillerPerkFactoryClass extends PerkFactoryClass {
    constructor() {
        super(KillerPerks);
    }
}

export const KillerPerkFactory = new KillerPerkFactoryClass();

class SurvivorPerkFactoryClass extends PerkFactoryClass {
    constructor() {
        super(SurvivorPerks);
    }
}

export const SurvivorPerkFactory = new SurvivorPerkFactoryClass();

class AllPerkFactoryClass extends PerkFactoryClass {
    constructor() {
        super(Object.assign({}, KillerPerks, SurvivorPerks));
    }
}

export const AllPerkFactory = new AllPerkFactoryClass();
