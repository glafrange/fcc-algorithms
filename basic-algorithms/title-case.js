function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for(i=0; i < str.length; i++) {
    str[i] = str[i].replace(/\w/, function(letter) {
      return letter.toUpperCase();
    });
  }
  return str.join(" ");
}

titleCase("I'm a little tea pot");
