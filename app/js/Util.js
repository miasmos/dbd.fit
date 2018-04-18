import { WindowSize } from './services/WindowSize';

export class Util {
    static debounce(fn, wait, immediate) {
        let timeout;

        return (...args) => {
            const later = () => {
                timeout = null;
                if (!immediate) {
                    fn.apply(this, args);
                }
            };

            const callNow = !!immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) {
                fn.apply(this, args);
            }
        };
    }

    static isClippingBottom(target) {
        const windowHeight = WindowSize.height,
            rect = target.getBoundingClientRect();

        if (rect.top + rect.height > windowHeight) {
            return rect.top + rect.height - windowHeight;
        } else {
            return false;
        }
    }

    static isClippingRight(target) {
        const windowWidth = WindowSize.width,
            rect = target.getBoundingClientRect();

        if (rect.left + rect.width > windowWidth) {
            return rect.left + rect.width - windowWidth;
        } else {
            return false;
        }
    }
}
