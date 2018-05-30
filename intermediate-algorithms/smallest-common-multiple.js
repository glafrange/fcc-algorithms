function smallestCommons(arr) {
  arr.sort((a,b) => (a-b));

  let lcm = arr[0] * arr[1];
  let found = false;
  let range = [];
  
  for(i=arr[0]; i<=arr[1]; i++) {
    range.push(i);
  }
  
  while(!found) {
    let newFound = true;
    range.forEach(num => {
      if(lcm % num !== 0) {
        newFound = false;
        lcm += arr[0] * arr[1];
      } else if(num === arr[1] && newFound) {
        found = true;
      }
    });
 
}

  return lcm;
}


smallestCommons([1,5]);
