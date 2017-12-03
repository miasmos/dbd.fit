import { KillerPerks, SurvivorPerks } from './data/Perks'
import Factory from './Factory'

class KillerPerkFactoryClass extends Factory {
	constructor() {
		super(KillerPerks)
	}
}

export const KillerPerkFactory = new KillerPerkFactoryClass()

class SurvivorPerkFactoryClass extends Factory {
	constructor() {
		super(SurvivorPerks)
	}
}

export const SurvivorPerkFactory = new SurvivorPerkFactoryClass()

