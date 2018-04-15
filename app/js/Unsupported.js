import { UserAgent } from './services';

class UnsupportedClass {
    constructor() {
        this.unsupported = UserAgent.isMobile();
        window.addEventListener('load', this.onLoad.bind(this));
    }

    onLoad() {
        if (this.unsupported) {
            document
                .getElementsByClassName('unsupported')[0]
                .setAttribute('class', 'unsupported show');
        }
    }
}

export const Unsupported = new UnsupportedClass();
