/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = "asc") {
  const sortedArr = [...arr];
  if (param === "asc") {
    sortedArr.sort(function (a, b) {
      return a.localeCompare(b, "kf", {
        caseFirst: "upper",
      });
    });
  } else if (param === "desc") {
    sortedArr
      .sort(function (a, b) {
        return a.localeCompare(b, "kf", {
          caseFirst: "lower",
        });
      })
      .reverse();
  } else {
    return;
  }
  return sortedArr;
}
