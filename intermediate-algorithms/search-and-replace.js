function myReplace(str, before, after) {
  let arr = str.split(" ");
  let index = arr.indexOf(before);
  if(before.substr(0,1) === before.substr(0,1).toUpperCase()){
    after = after.replace(after.substr(0,1), after.substr(0,1).toUpperCase());
  }else{
    after = after.replace(after.substr(0,1), after.substr(0,1).toLowerCase());
  }
  arr[index] = after;
  return arr.join(" ");
}

myReplace("He is sleeping on the couch", "sleeping", "Sitting");
