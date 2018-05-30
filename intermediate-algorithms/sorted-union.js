function uniteUnique(arr) {
  arr = Array.from(arguments).reduce((acc, cur) => acc.concat(cur),[]);
  let newArr = [];
  arr.forEach(i => {
    if(!newArr.includes(i)) {
      newArr.push(i);
    }
  });
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
