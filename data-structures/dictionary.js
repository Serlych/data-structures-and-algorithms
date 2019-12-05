class Dictionary {
    constructor() {
        this.data = [];
        this.length = 0;
    }

    add(key, value) {
        this.data[key] = value;
        this.length += 1;
        return this.data[key];
    }

    find(key) {
        return this.data[key];
    }

    remove(key) {
        if (this.data[key]) {
            delete this.data[key];
            this.length -= 1;
            return true;
        }

        return false;
    }

    clear() {
        for (let key in this.data) {
            delete this.data[key];
        }

        return true;
    }

    printAll(sorted) {
        if (sorted) {
            const temp = Object.keys(this.data).sort();
            const result = [];

            for (let i = 0; i < this.length; i++) {
                result[temp[i]] = this.data[temp[i]];
            }

            console.log(result);
        } else {
            console.log(this.data);
        }
    }

    printEach(sorted) {
        if (sorted) {
            const temp = Object.keys(this.data).sort();

            for (let i = 0; i < this.length; i++) {
                console.log(`${temp[i]}: ${this.data[temp[i]]}`);
            }
        } else {
            for (let key in this.data) {
                console.log(`${key}: ${this.data[key]}`);
            }
        }
    }
}