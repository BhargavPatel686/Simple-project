const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = '';
let oddNumbers = '';

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers += numbers[i] + ' ';
  } else{
    oddNumbers += numbers[i] + ' ';
  }
}

console.log('Even Numbers:', evenNumbers);
console.log('odd Numbers:', oddNumbers);
let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = '';

  for (let j = 1; j <= i; j++) {
    if (j <= i) {
      pattern += '* ';
    }
  }

  console.log(pattern);
}
