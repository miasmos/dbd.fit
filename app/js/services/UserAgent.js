class UserAgentClass {
	constructor() {
		this.ua = navigator.userAgent
		this.mobile = !!this.ua.match(/mobi/i)
	}

	userAgent() {
		return this.ua
	}

	isMobile() {
		return this.mobile
	}

	isDesktop() {
		return !this.mobile
	}
}

const UserAgent = new UserAgentClass()
export default UserAgent
