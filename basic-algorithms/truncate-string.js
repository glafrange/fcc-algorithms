function truncateString(str, num) {
  if(num > 3 && str.length > num){
    return str.slice(0, num-3) + '...';
  }else if(num > 0 && num <= 3){
    return str.slice(0, num) + '...';
  }else{
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
