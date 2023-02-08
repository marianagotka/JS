// put your code here
// const n = 100;
// let sum = 0;

// while (n <= 200) {
//   sum += n;
//   n -= 1;
//   console.log('Result:' + sum);
// }
// const n = 200;
// let sum = 0;

// while (n > 100) {
//   sum += n;
//   n += 1;
// }
// console.log('Result:' + sum);

// const n = 100;
// let sum = 1;
// let i = n;

// while (n <= 200) {
//   sum += n;
//   i++;
// }
// console.log('Result:' + sum);
// let m = 10;
// let n = 20;
// let result = 1;

// do {
//   if (m % 2 === 1) {
//     result *= m;
//   }
//   m++;
// } while (m < n);
// console.log(result);
let result = 1;
for (const m = 10; m <= 20; m++) {
  if (m % 2 === 1) {
    result *= m;
  }
}
console.log(result);
