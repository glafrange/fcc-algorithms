function findDiff(arr1, arr2) {
  const diff = [];
  for(let i=0; i<arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !diff.includes(arr1[i])) {
      diff.push(arr1[i]);
    }
  }
  for(let i=0; i<arr2.length; i++) {
    if (!arr1.includes(arr2[i]) && !diff.includes(arr2[i])) {
      diff.push(arr2[i]);
    }
  }
  return diff;
}

function sym(args) {
  args = Array.from(arguments);
  let solution = [];
  for (i=1; i<args.length; i++){
    if (i===1) {
      solution = findDiff(args[i-1],args[i]);
    } else {
      solution = findDiff(solution,args[i]);
    }
  }
  return solution.sort();
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
