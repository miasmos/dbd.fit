export class Model {
    constructor(data = {}) {
        this.data = data;
        this.initialized = false;
        this.empty = !('index' in data && !!data.index);
        this.frozen = false;
    }

    initialize() {
        this.initialized = true;
    }

    freeze() {
        this.frozen = true;
    }
}
