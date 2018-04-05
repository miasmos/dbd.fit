export class Model {
    constructor(data) {
        this.data = data;
        this.initialized = false;
    }

    initialize() {
        this.initialized = true;
    }
}
