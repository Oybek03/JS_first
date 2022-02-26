// objeck
// const aboutMe = {
//   birth: prompt("yilingiz"),
//   now: prompt("hozirgi yil"),
//   calcAge: function () {
//     return this.now - this.birth;
//   },
// };
// console.log(aboutMe.calcAge());
// object end

// object ichidagi ichma ich funksiya

// const contact = {
//   myFunc: prompt("hozirgi yil"),
//   youFunc: prompt("tugulgan yilingiz"),
//   youAge: function () {
//     let dala = () => {
//       return this.myFunc - this.youFunc;
//     };
//     return dala;
//   },
// };
// console.log(contact.youAge()());

// object ichidagi ichma ich funksiya

// for

// for (let i = 1; i < 100; i = i + 2) {
//   console.log(i);
// }

// for(let a=0; a=100; a=a+2){
//   console.log(a)
// }

//for end

// amalyot

// let birth1 = [1996, 1998, 2003, 2006,2010];
// let age1 = [];
// let calcAge1 = function (birth2, now2) {
//   for (let i = 0; i < birth1.length; i++) {
//     age1.push(now2 - birth1[i]);
//   }
//   return age1;
// };
// console.log(calcAge1(birth1, 2022));

//amalot end

//Array ustida amallar

let arr = ["Oybek", "Jumayev", "Coder"];
arr.push("student");
arr.push("19 yosh");
arr.unshift("salom");
arr.unshift("assalom");
arr.pop();
arr.shift();
arr.splice(0, 2);
arr.indexOf("Coder");
console.log(arr);

//Array ustida amallar tugashi

// Object ustida amal

const amalObject = {
  firstName: "Oybek",
  lastName: "Jumayev",
  phone: "930091995",
};
console.log(amalObject.phone, amalObject.firstName);
// Object ustida amal end
