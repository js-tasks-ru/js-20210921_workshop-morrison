/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = "asc") {
  const sortedArr = [...arr];

  function compareStrings(a, b) {
    const caseParams = {
      asc: "upper",
      desc: "lower",
    };

    const caseStrings = caseParams[param];

    return a.localeCompare(b, ["ru", "en"], {
      caseFirst: caseStrings,
    });
  }

  if (param === "asc") {
    sortedArr.sort(compareStrings);
  }
  if (param === "desc") {
    sortedArr.sort(compareStrings).reverse();
  }
  return sortedArr;
}
