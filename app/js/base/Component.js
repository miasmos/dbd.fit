import $ from '../vendor/zepto'
import Observer from './Observer'
import Global from '../Global'

export default class Component extends Observer {
	constructor(selector, parent) {
		super()
		this.global = {}
		this.local = {}
		this.elements = {}
		this.$ = undefined

		if (typeof selector !== 'undefined') {
			this.$ = window.$(selector)
		}

		if (typeof parent !== 'undefined') {
			parent.on('setLocal', (param, value, object) => {
				this.setLocal(param, value, object)
			})
		}

		Global.on('setGlobal', (param, value, object) => {
			this.setGlobal(param, value, object)
		})
	}

	globalDidUpdate() {}
	globalWillUpdate() {}
	localDidUpdate() {}
	localWillUpdate() {}

	setGlobal(param, value, object) {	// propagates both up and down
		if (typeof object !== 'undefined') {
			this.globalWillUpdate(param, value)
			this.global = {
				...this.global,
				...object
			}
			this.globalDidUpdate(param, value)
		} else {
			Global.set(param, value)
		}
	}

	setLocal(param, value, object) {	// propagates down
		console.log(`${this.constructor.name} updated Local`, param, value, object)
		if (typeof param === 'undefined') {
			return
		}
		if (typeof object !== 'undefined') {
			this.local = {
				...this.local,
				...object
			}
			this.emit('setLocal', [undefined, undefined, object])
			return
		}
		if (!(param in this.local) || value !== this.local[param]) {
			const newLocal = { ...this.local }
			newLocal[param] = value
			this.localWillUpdate(param, value)
			this.local = newLocal
			this.localDidUpdate(param, value)
			this.emit('setLocal', [param, value, undefined])
		}
	}

	cacheDOMElement(key, selector, element) {
		if (typeof element !== 'undefined') {
			this.elements[key] = element
		} else {
			this.elements[key] = this.$.find(selector)
		}
	}
}
