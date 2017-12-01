import { Survivors, Killers } from './data'
import Factory from './Factory'

class SurvivorFactoryClass extends Factory {
	constructor() {
		super(Survivors)
	}
}

class KillerFactoryClass extends Factory {
	constructor() {
		super(Killers)
	}
}

export const SurvivorFactory = new SurvivorFactoryClass()
export const KillerFactory = new KillerFactoryClass()
