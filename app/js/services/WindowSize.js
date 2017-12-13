import Util from '../Util'
import Observer from '../base/Observer'

class _WindowSize extends Observer {
	constructor() {
		super()
		window.addEventListener('DOMContentLoaded', this.onResize.bind(this))
		window.addEventListener('resize', Util.debounce(this.onResize.bind(this), 150))
		this.window = window
		this.width = 0
		this.height = 0
	}

	onResize() {
		this.width = this.window.innerWidth
		this.height = this.window.innerHeight

		this.emit('resize', this.width, this.height)
	}
}

const WindowSize = new _WindowSize()
export default WindowSize
