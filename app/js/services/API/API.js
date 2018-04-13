import Promise from 'promise-polyfill';
import 'whatwg-fetch';
import { Config } from '../Config';

class APIClass {
    constructor() {
        this.url = `${Config.protocol}://${Config.host}:${Config.port}`;
    }

    get(params) {
        return this.request(`/build/get`, params);
    }

    save(params) {
        return this.request(`/build/save`, params);
    }

    request(path, params) {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}${path}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(params)
            })
                .then(response => {
                    if (response.status !== 200) {
                        reject();
                    } else {
                        return response.json();
                    }
                })
                .then(json => {
                    resolve(json.data);
                })
                .catch(reject);
        });
    }
}

export const API = new APIClass();
