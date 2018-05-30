function sumFibs(num) {
  const fibArray = [];
  
  function getFibs(num, last, current) {
    
    if(current === 1) {
      fibArray.push(last, current);
    }

    if(current + last > num) {
      return current;
    }

    const temp = last + current;
    last = current;
    current = temp;

    fibArray.push(current);

    return getFibs(num, last, current);
  }
  
  getFibs(num, 1, 1);
  return fibArray.filter(item => item % 2 !== 0).reduce((acc, cur) => acc + cur);
}

console.log(sumFibs(1));
