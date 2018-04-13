export class Env {
    static isDevelopment() {
        return process.env.NODE_ENV === 'development';
    }

    static isProduction() {
        return process.env.NODE_ENV === 'production';
    }
}
