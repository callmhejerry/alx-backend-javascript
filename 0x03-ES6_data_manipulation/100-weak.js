const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.has(endpoint) === false) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    if (count + 1 >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, count + 1);
    }
  }
}

export { weakMap, queryAPI };
