import { Factory } from './Factory';

export class ModelFactory extends Factory {
    constructor(model, data = {}) {
        super(data);
        this.model = model;
        this.instances = [];
    }

    get(key, ignoreCache = false) {
        const data = super.get(key);

        if (!!data) {
            let instance;
            if (!(key in this.instances) || ignoreCache) {
                instance = new this.model(data);

                if (!ignoreCache) {
                    this.instances[key] = instance;
                }
                instance.initialize();
            } else {
                instance = this.instances[key];
            }

            return instance;
        } else {
            return new this.model();
        }
    }

    toArray() {
        super.toArray();
        return this.array.map(value => this.get(value.index));
    }
}
