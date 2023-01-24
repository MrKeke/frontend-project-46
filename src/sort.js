import _ from 'lodash'
export default function sortbyabc(obj) {
    let sorted = {};
    let keys = _.sortBy(Object.keys(obj));

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (typeof obj[key] === "object" && obj[key] !== null) {
            sorted[key] = sortbyabc(obj[key]);
        } else {
            sorted[key] = obj[key];
        }
    }
    return sorted;
}