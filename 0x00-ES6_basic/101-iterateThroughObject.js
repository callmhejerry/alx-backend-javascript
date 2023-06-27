export default function iterateThroughObject(reportWithIterator) {
  let newString = '';
  let count = 1;
  for (const item of reportWithIterator) {
    if (count === 1) {
      newString = item.concat(' | ');
      count += 1;
    } else {
      newString = newString.concat(item);
      if (count !== reportWithIterator.length) {
        newString = newString.concat(' | ');
      }
      count += 1;
    }
  }
  return newString;
}
