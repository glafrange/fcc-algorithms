function destroyer(arr) {
  const args = Array.from(arguments).splice(1);
  return arr.filter(val => args.includes(val) === false);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
