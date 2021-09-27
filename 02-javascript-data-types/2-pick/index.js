/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
// export const pick = (obj, ...fields) => {

// };

pick = (obj, ...fields) => {
  return fields in obj;

  // return Object.values(obj);
  // return Object.keys(obj);
  //   return Object.entries(obj);
};

const fruits = {
  apple: 2,
  orange: 4,
  banana: 3,
};

console.log(pick(fruits, "apple"));
