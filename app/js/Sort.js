export class Sort {
    static byPropertyDesc(obj, property) {
        return obj.sort((a, b) => {
            return b[property] - a[property];
        });
    }

    static byPropertyAsc(obj, property) {
        return obj.sort((a, b) => {
            return a[property] - b[property];
        });
    }

    static byPropertyAlphabetic(obj, property) {
        return obj.sort((a, b) => {
            let tA = a[property].toUpperCase(),
                tB = b[property].toUpperCase();

            return tA < tB ? -1 : tA > tB ? 1 : 0;
        });
    }
}
