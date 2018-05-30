function addTogether(...nums) {
  function isNum(num) {
    if(!Number.isInteger(num)){
      return false;
    } else {
      return true;
    }
  }
  if(!isNum(nums[0]) || !isNum(nums[1]) && nums[1]) {
    return undefined;
  } else if(nums[1]) {
    return nums[0] + nums[1];
  }
  function sumTwo(num2) {
    if(isNum(num2) === false) {
      return undefined;
    }
    return nums[0] + num2;
  }
  return sumTwo;
}

addTogether(2,3);
