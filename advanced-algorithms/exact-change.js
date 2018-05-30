function checkCashRegister(price, cash, cid) {
  let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  let changeDue = cash - price;
  
  if (cid.reduce((acc, cur) => acc + cur[1], 0) === changeDue) {
    return "Closed";
  } else if (cid.reduce((acc, cur) => acc + cur[1], 0) < cash) {
    return "Insufficient Funds";
  } 
  
  while (change.reduce((acc, cur) => acc + cur[1], 0) < changeDue) {
    while (changeDue >= 100 && cid[8][1] >= 100) {
      cid[8][1] -= 100;
      change[8][1] += 100;
      changeDue -= 100;
    }
    while (changeDue >= 20 && cid[7][1] >= 20) {
      cid[7][1] -= 20;
      change[7][1] += 20;
      changeDue -= 20;
    }
    while (changeDue >= 10 && cid[6][1] >=10) {
      cid[6][1] -= 10;
      change[6][1] += 10;
      changeDue -= 10;
    }
    while (changeDue >= 5 && cid[5][1] >=5) {
      cid[5][1] -= 5;
      change[5][1] += 5;
      changeDue -= 5;
    }
    while (changeDue >= 1 && cid[4][1] >=1) {
      cid[4][1] -= 1;
      change[4][1] += 1;
      changeDue -= 1;
    }
    while (changeDue >= 0.25 && cid[3][1] >=0.25) {
      cid[3][1] -= 0.25;
      change[3][1] += 0.25;
      changeDue -= 0.25;
    }
    while (changeDue >= 0.10 && cid[2][1] >=0.10) {
      cid[2][1] -= 0.10;
      change[2][1] += 0.10;
      changeDue -= 0.10;
    }
    while (changeDue >= 0.05 && cid[1][1] >=0.05) {
      cid[1][1] -= 0.05;
      change[1][1] += 0.05;
      changeDue -= 0.05;
    }
    while (changeDue > 0.009 && cid[0][1] >=0.01) {
      cid[0][1] -= 0.01;
      change[0][1] += 0.01;
      changeDue -= 0.01;
    }
  }
  //return change.reduce((acc,cur) => acc + cur[1], 0);
  change = change.filter(arr => arr[1] > 0);
  return change.reverse();
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
