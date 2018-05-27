function repeatStringNumTimes(str, num) {
  var repeatedStr = '';
  if (num >= 1) {
    repeatedStr += str;
    for(i=1; i < num; i++){
      repeatedStr+= str;
    }
    return repeatedStr;
  }else{
    return repeatedStr;
  }
}

repeatStringNumTimes("abc", 1);
