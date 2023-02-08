const m = 10;
const n = 20;
let result = 1;

do {
  if (i % 2 === 1) {
    result *= m;
  }
  i++;
} while (i < n);

console.log(result);
