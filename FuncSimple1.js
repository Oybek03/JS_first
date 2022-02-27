//FuncSimple1 end

// let son = Number(prompt("son kirit"));

// function PowerA3() {
//   alert(son ** 3);
// }
// PowerA3();

//FuncSimple1 end

//FuncSimple2

// let son2 = Number(prompt("Sonni kiriting"));
// let PowerA234 = function () {
//   console.log(son2 ** 2);
//   console.log(son2 ** 3);
//   console.log(son2 ** 4);
// };
// PowerA234();

//FuncSimple2 end

//FuncSimple3
// let birinchiSon = Number(prompt("birinchi sonni kirit"));
// let ikkinchiSon = Number(prompt("ikkinchi sonni kirit"));
// function MEAN() {
//   console.log("o'rta arifmeti:" + " " + (birinchiSon + ikkinchiSon) / 2);
//   console.log("o'rta geometrigi:" + " " + (birinchiSon * ikkinchiSon) ** (1 / 2)
//   );
// }
// MEAN();

//FuncSimple3 end

//FuncSimple4

// let a = Number(prompt("uchburchak tomonini kiriting"));
// function Triangle() {
//   console.log("Yuzi:" + " " + (a ** 2 * 3 ** (1 / 2)) / 4);
//   console.log("Peremtri:" + " " + a * 3);
// }
// Triangle();

//FuncSimple4 end

//FuncSimple6

// let sum = 0;
// let num = prompt([]);
// function DigitCountSum() {
//   console.log(num.length);
//   for (let i = 0; i < num.length + 1; i++) {
//     sum = sum + Number(num.substring(i - 1, i));
//   }
//   console.log(sum);
//   // console.log((num % 10) + Math.trunc(num / 10));
// }
// DigitCountSum();

//FuncSimple6 end

//FuncSimple7
let num = prompt();
let arr = num.split("");
console.log(arr);
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
