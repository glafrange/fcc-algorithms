function selectionSort(array, index=0) {
  let min = array[index];
  let minIndex = index;
  
  for(let i=index; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }

  if(minIndex !== index) {
    let tmp = array[index];
    array[index] = array[minIndex];
    array[minIndex] = tmp;
  }

  if(index !== array.length - 1) {
    array = selectionSort(array, index + 1);
  }

  return array;
}

// test array:
const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log("unsorted: " + arr);
console.log("sorted:   " + selectionSort(arr));