interface Copyable {
    [key: string]: Copyable | any
}

const deepCopy = (obj: Copyable): Copyable => {
    let copy: Copyable | Copyable[];

    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Object) {
        copy = {};
        for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = deepCopy(obj[attr]);
            }
        }
        return copy;
    }


    throw new Error("Unable to copy obj! Its type isn't supported.");
}

const original = {name: 'Alice', hobbies: ['reading', 'biking']};
const copy = deepCopy(original);
console.log(copy);
