let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let usluga = [];
let total = [];

let calc = function () {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] < 50 || bills[i] > 300) {
      let u = bills[i] * 0.2;
      let j = bills[i] + u;
      usluga.push(u);
      total.push(j);
    } else if (bills[i] >= 50 && bills[i] <= 300) {
      let oraliq = bills[i] * 0.15;
      let oraliqJami = bills[i] + oraliq;
      usluga.push(oraliq);
      total.push(oraliqJami);
    } else {
      console.log("xato qiymat kiritdinggiz");
    }
  }
  console.log(`Jami summa: ${total}`);
  console.log(`usluga  summa: ${usluga}`);
};

calc();
