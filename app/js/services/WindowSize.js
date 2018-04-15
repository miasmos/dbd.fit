import Util from '../Util';
import { Observer } from '../Observer';

class WindowSizeClass extends Observer {
    constructor() {
        super();
        window.addEventListener('DOMContentLoaded', this.onResize.bind(this));
        window.addEventListener(
            'resize',
            Util.debounce(this.onResize.bind(this), 150)
        );
        this.window = window;
        this.width = 0;
        this.height = 0;
    }

    onResize() {
        this.width = this.window.innerWidth;
        this.height = this.window.innerHeight;

        this.emit('resize', this.width, this.height);
    }
}

export const WindowSize = new WindowSizeClass();
