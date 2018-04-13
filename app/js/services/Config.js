import { Env } from './Env';
const config = require('../../../config.json');

export class ConfigClass {
    constructor() {
        const data = Env.isDevelopment()
            ? config.development
            : config.production;
        Object.assign(this, data);
    }
}
export const Config = new ConfigClass();
