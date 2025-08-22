//Functions

const logNumber1 = (num: number): void => {
  console.log(num);
}

const logNumber2: (num: number) => void = (num: number): void => {
  console.log(num);
}

// When to use type annotations
// 1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }

// 2. When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
console.log(foundWord); // true

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
console.log(numberAboveZero); // 12