function steamrollArray(arr) {
  // I'm a steamroller, baby
  arr = [].concat(...arr);
  return arr.some(item => Array.isArray(item)) ? steamrollArray(arr) : arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
