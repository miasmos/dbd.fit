import { Powers } from './data'
import Factory from './Factory'

class PowerFactoryClass extends Factory {
	constructor() {
		super(Powers)
	}
}

const PowerFactory = new PowerFactoryClass()
export default PowerFactory

