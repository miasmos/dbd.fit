import Observer from './base/Observer'

class _Global extends Observer {
	constructor() {
		super()
		this.global = {}
		this.didInit = false
	}

	set(param, value) {
		if (typeof param === 'undefined') {
			return
		}
		if (!(param in this.global) || value !== this.global[param]) {
			console.log(`${this.constructor.name} updated Global`, param, value)
			const newGlobal = { ...this.global }
			newGlobal[param] = value
			this.global = newGlobal
			this.emit('setGlobal', param, value, this.global)
		}
	}

	init(obj) {
		if (!this.didInit) {
			this.global = obj
			this.didInit = true

			const values = Object.keys(this.global)
			for (let index = 0; index < values.length; index += 1) {
				const key = values[index]
				const value = this.global[key]
				this.emit('setGlobal', key, value, this.global)
			}
		}
	}
}

const Global = new _Global()
export default Global
