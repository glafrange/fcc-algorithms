function sumPrimes(num) {
  let primes = [];
  for(i=2; i <= num; i++){
    let isPrime = true;
    for(j=2; j<i; j++) {
      if(i % j === 0) {
        isPrime = false;
      }
    }
    if(isPrime === true) {
      primes.push(i);
    }
  }
  return primes.reduce((a,b) => (a+b));
}

sumPrimes(10);
