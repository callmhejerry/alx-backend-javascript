export default function hasValuesFromArray(set, array) {
    for (let arrItem of array) {
        let seen = false;
        for (let setItem of set) {
            if (setItem === arrItem) {
                seen = true;
            }
        }
        if (!seen) {
            return seen;
        }
    }
    return true;
}