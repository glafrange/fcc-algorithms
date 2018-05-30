function orbitalPeriod(arr) {
  var solution = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var getOrbitalPeriod = i => Math.round(2*Math.PI*Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3)/GM));
  for(i=0; i < arr.length; i++) {
    const orbitalPeriod = getOrbitalPeriod(i);
    solution.push({
      name : arr[i].name,
      orbitalPeriod : orbitalPeriod
    });
  }
  return solution;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
