export default function hasValuesFromArray(set, array) {
  for (const arrItem of array) {
    let seen = false;
    for (const setItem of set) {
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
