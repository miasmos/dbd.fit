import { Factory } from './Factory';

export class ModelFactory extends Factory {
    constructor(model, data) {
        super(data);
        this.model = model;
        this.instances = [];
    }

    get(key) {
        const data = super.get(key);

        if (!!data) {
            if (!(key in this.instances)) {
                const instance = new this.model(data);
                this.instances[key] = instance;
                instance.initialize();
            }
            return this.instances[key];
        } else {
            return data;
        }
    }

    toArray() {
        super.toArray();
        return this.array.map(value => this.get(value.index));
    }
}
