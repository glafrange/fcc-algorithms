function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str
    .replace(/\W/g,'-')
    .replace(/[a-z][A-Z]/g, function(match) {
      return match[0] + '-' + match[1]; 
    })
    .replace(/_/g, '-')
    .toLowerCase();
}

spinalCase('thisIsSpinalTap');
