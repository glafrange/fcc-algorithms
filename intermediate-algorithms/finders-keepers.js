function findElement(arr, func) {
  return arr.filter(num => func(num))[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
