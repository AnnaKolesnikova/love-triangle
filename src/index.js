/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  array = preferences;
  foundedTriangles = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    indexOfLover2 = element - 1;
    lover2 = array[indexOfLover2];

    indexOfLover3 = lover2 - 1;
    lover3 = array[indexOfLover3];
    if (
      lover3 - 1 == i &&
      element != lover2 &&
      lover2 != lover3 &&
      lover3 != element
    ) {
      triangle = {
        lover1: element,
        lover2: lover2,
        lover3: lover3
      };
      foundedTriangles.push(triangle);
    }
  }
  return foundedTriangles.length / 3;
};
