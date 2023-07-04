export default function cleanSet(set, startString) {
  let newString = '';

  if (startString === '') {
    return newString;
  }
  for (const element of set) {
    if (element.startsWith(startString)) {
      const subString = element.substring(startString.length);
      if (newString === '') {
        newString += subString;
      } else {
        newString += `-${subString}`;
      }
    }
  }

  return newString;
}
