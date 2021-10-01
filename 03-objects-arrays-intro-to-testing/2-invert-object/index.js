/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    const invertedMap = new Map();
    if (!obj) return;
    for (const [obj1, obj2] of Object.entries(obj)) {
        invertedMap.set(obj2, obj1);
    }
    return Object.fromEntries(invertedMap.entries());
}
