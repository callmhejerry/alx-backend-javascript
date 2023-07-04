export default function createInt8TypedArray(length, position, value) {
  const arrBuff = new ArrayBuffer(length);
  const int8Arr = new Int8Array(arrBuff);

  if (position >= (length * 8) / 8) {
    throw new Error('Position outside range');
  }
  int8Arr[position] = value;
  return arrBuff;
}
