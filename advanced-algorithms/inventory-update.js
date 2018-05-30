function updateInventory(arr1, arr2) {
  var tst;
  
  arr2.forEach(subArr2 => {  
    arr1.map(subArr1 => {
      if(subArr1[1] === subArr2[1]) {
        subArr1[0] += subArr2[0];
        return subArr1;
      }
    });
    
    let isTrue = false; 
    for(i=0; i<arr1.length; i++) {
      if(JSON.stringify(subArr2[1]) === JSON.stringify(arr1[i][1])) {
        isTrue = true;
      }
    }
    if(!isTrue) {
      arr1.push(subArr2);
    }
    
  });
  
  return arr1.sort((a, b) => {
    if(a[1] > b[1]) {
      return 1;
    }
    
    if(a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
