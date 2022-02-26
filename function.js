"use strict";

// let name = 15;
// let name2 = 20;
// name2 > 10 || name2 < 20 ? console.log("sasss") : console.log("fssa");

// var doston = "kalla";
// // function decloration
// function funcName(son1, son2) {
//   console.log("salom");
//   return son1 + son2 + 100;
// }

// console.log(funcName(50, 55));
// // decloration end

// // function expressions
// let myFunc = function (a, b, c) {
//   return (a + b + c) / 0.1;
// };
// console.log(myFunc(5, 0.5, 40));
// // expressions end

// //arrow function

// let iFunc = (x, y) => {
//   return x + y;
// };
// console.log(iFunc(3, 8));

// arrow end

//27-mavzu

// let abedUmumiy;
// let abedSummasi = Number(prompt("abed summasini yoz"));
// let abedOylik = Number(prompt("oylikni yoz"));

// let abed = function (abedSummasi1) {
//   return abedSummasi1 * 30;
// };
// let oylikFoyda = function (abedOylik1) {
//   return abedOylik1 - abed(abedSummasi);
// };
// console.log(oylikFoyda(abedOylik));
// 27- mavzu end

// amalyot

// let oylik = Number(prompt("oylik kirit"));
// let foyda = function (maosh) {
//   return maosh - maosh * 0.12;
// };
// console.log(foyda(oylik));
//amalyot tugadi
//massivlar

// let friends = ["alek", "salom", "javob", "sasjn"];
// console.log(friends);
// console.log(friends[3], friends[2]);

// console.log(friends.length);
// friends[1] = 555;
// console.log(friends);

// let friend = new Array("ddd", "ddddd", "wdws", 44, friends);
// console.log(friend);
// friend[1] = 777;
// console.log(friend);

// Exercise - 5 1

// let calcAverage = function (bal1, bal2, bal3) {
//   return (bal1 + bal2 + bal3) / 3;
// };
// let delfin = calcAverage(200, 100, 100);
// let koala = calcAverage(65, 54, 49);
// console.log(delfin);
// console.log(koala);

// if (delfin > koala * 2) {
//   console.log(`delfin galaba qozondi (${delfin} va ${koala})`);
// } else if (koala > delfin * 2) {
//   console.log(`koala galaba qozondi (${delfin} va ${koala})`);
// } else {
//   console.log("hech kim qozonmadi");
// }
// Exercise - 5 1 end

// Exercise - 5 2
let fff = "";
let kalk = Number(prompt("1-son kirit"));
let kalk2 = Number(prompt("2-sonni kirit"));
let ifoda = String(prompt("amalni kirit +,-,*,/"));
let amalFunc = function (amal) {
  switch (ifoda) {
    case "+":
      console.log(kalk + kalk2);
      break;
    case "-":
      console.log(kalk - kalk2);
      break;
    case "*":
      console.log(kalk * kalk2);
      break;
    case "/":
      console.log(kalk / kalk2);
      break;
    default:
      console.log("amal xato");
  }
};

amalFunc(kalk, kalk2, ifoda);
