function bubbleSort(array) {
  let swapped = false;
  function swap(i, j) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  for(let i=0; i < array.length - 1; i++) {
    if(array[i] > array[i+1]) {
      swap(i, i+1);
      swapped = true;
    }
  }
  if(swapped) {
    array = bubbleSort(array);
  }
  return array;
}

// test array:
const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log("unsorted: " + arr);
console.log("sorted:   " + bubbleSort(arr));