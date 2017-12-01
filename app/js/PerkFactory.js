import { Perks } from './data'
import Factory from './Factory'

class PerkFactoryClass extends Factory {
	constructor() {
		super(Perks)
	}
}

const PerkFactory = new PerkFactoryClass()
export default PerkFactory
