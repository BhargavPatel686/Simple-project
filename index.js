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
