function palindrome(str) {
  var strClean = str.toLowerCase().replace(/[\W_]/g,"");
  return strClean.split("").reverse().join("") === strClean;
}



palindrome("eye");
