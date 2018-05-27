function mutation(arr) {
  let firstString = arr[0].toString().toLowerCase();
  let secondString = arr[1].toString().toLowerCase();
  for (var char in secondString){
    if (firstString.indexOf(secondString[char]) === -1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
