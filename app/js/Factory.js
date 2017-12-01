export default class Factory {
	constructor(data) {
		this.data = data
		this.array = undefined
	}

	get(key) {
		if (key in this.data) {
			return this.data[key]
		}

		return false
	}

	toArray() {
		if (typeof this.array === 'undefined') {
			const keys = Object.keys(this.data)
			this.array = keys.map(value => this.data[value])
		}

		return this.array
	}
}
