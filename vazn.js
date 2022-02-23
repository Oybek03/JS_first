let uboyi = 1;
let oboyi = 1.6;
let uvazn = 75;
let ovazn = 48;
let umid = uvazn / uboyi ** 2;
let oybek = ovazn / oboyi ** 2;


if (umid < 18.5) {
  console.log("Umid: UNDERWEIGHT");
} else if (18.5 < umid < 24.9) {
  console.log("Umid: NORMAL");
} else if (25 < umid < 29.9) {
  console.log("Umid: OVERWEIGHT");
} else if (30 < umid < 34.9) {
  console.log("Umid: OBESE");
} else if (umid > 35) {
  console.log("Umid: EXTREMELY OBESE");
}
if (oybek < 18.5) {
  console.log("Oybek: UNDERWEIGHT");
} else if (18.5 < oybek < 24.9) {
  console.log("Oybek: NORMAL");
} else if (25 < oybek < 29.9) {
  console.log("Oybek: OVERWEIGHT");
} else if (30 < oybek < 34.9) {
  console.log("Oybek: OBESE");
} else if (oybek > 35) {
  console.log("Oybek: EXTREMELY OBESE");
}
