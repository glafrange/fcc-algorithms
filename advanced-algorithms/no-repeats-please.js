function permAlone(str) {
  let arr = str.split("");
  let perms = [];
  var temp;
  
  function swap(index1, index2) {
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  let generate = function(len) {
    if(len === 1) {
      perms.push(arr.join(""));
    }
    else {
      for(var i=0; i < len; i++) {
        if(len % 2 === 0) {
          generate(len-1);
          swap(i, len-1);
        }
        else {
          generate(len-1);
          swap(0, len-1);
        }
      }
    }
  };
  
  generate(arr.length);
  
  return perms.filter(perm => !perm.match(/(.)\1+/g)).length;
}

permAlone('aab');
