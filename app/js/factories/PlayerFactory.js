import { Survivors, Killers } from '../data';
import { Player } from '../models/Player';
import { ModelFactory } from './base';

class PlayerFactoryClass extends ModelFactory {
    constructor(players) {
        super(Player, players);
    }
}

class SurvivorFactoryClass extends PlayerFactoryClass {
    constructor() {
        super(Survivors);
    }
}

export const SurvivorFactory = new SurvivorFactoryClass();

class KillerFactoryClass extends PlayerFactoryClass {
    constructor() {
        super(Killers);
    }
}

export const KillerFactory = new KillerFactoryClass();
