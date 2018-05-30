function translatePigLatin(str) {
  const vowels = ['a','e','i','o','u','y'];
  str = str.split("");
  if(vowels.includes(str[0])){
    str.push("way");
    return str.join("");
  }
  for(i=0; i < str.length; i++){
    else if (vowels.includes(str[i]) === false){
      str.push(str.splice(i,1));
      i--;
    }else if (vowels.includes(str[i]) === true){
      str.push('ay');
      return str.join(""); 
    }
  }
  
  return str;
}

translatePigLatin("algorithm");
