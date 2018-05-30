function dropElements(arr, func) {
  for(var i in arr) {
    if(func(arr[i])) {
      return arr.slice(i, arr.length);
    }
  }
  return [];
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
