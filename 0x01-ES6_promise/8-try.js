export default function divideFunction(numerator, denominator) {
  try {
    const result = numerator / denominator;
    return result;
  } catch (error) {
    throw (new Error('cannot divide by 0'));
  }
}
