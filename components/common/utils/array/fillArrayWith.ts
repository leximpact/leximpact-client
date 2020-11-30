const fillArrayWith = (length: number, iteratorFunc?) => Array(length)
  .fill(undefined)
  .map((value, index) => (iteratorFunc && iteratorFunc(index)) || index);

export default fillArrayWith;
