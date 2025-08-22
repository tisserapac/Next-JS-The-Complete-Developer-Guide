//Arrow functions in TypeScript
const add = (a: number, b: number): number => {
  return a + b;
};

// Named function
function devide(a: number, b: number): number {
  return a / b;
};

// Ananymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

const value = multiply(5, 10);
console.log(value); // 50

// Function with no return value
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
  console.log(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather); // Logs the date and weather