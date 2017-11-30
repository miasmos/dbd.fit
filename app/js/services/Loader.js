import Observer from '../base/Observer'

let instance

export default class Loading extends Observer {
	constructor() {
		if (!instance) {
			super()
			this.minimumWaitTime = 4100
			this.loaded = false
			this.waited = false

			window.addEventListener('DOMContentLoaded', this.onDOMContentLoad.bind(this))
			setTimeout(this.onWaited.bind(this), this.minimumWaitTime)
			instance = this
		}

		return instance
	}

	onDOMContentLoad() {
		this.loaded = true
		this.onLoaded()
	}

	onWaited() {
		this.waited = true
		this.onLoaded()
	}

	onLoaded() {
		if (this.loaded && this.waited) {
			this.emit('loaded')
		}
	}
}
