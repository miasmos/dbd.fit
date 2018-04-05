export class Factory {
    constructor(data) {
        this.data = data;
        this.array = undefined;
    }

    get(key) {
        if (key in this.data) {
            return this.data[key];
        }

        return false;
    }

    exists(key) {
        return key in this.data;
    }

    toArray() {
        if (typeof this.array === 'undefined') {
            this.array = Object.values(this.data);
        }
        return this.array;
    }
}
