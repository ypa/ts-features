const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};


const logger = (message: string): void => {
  console.log(message);
};


const throwError = (message: string): never => {
  throw new Error(message);
};


const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};


// TS Function annotation with object literal type annotation.
// const logWeather = (day: {date: Date; weather: string}): void => {
//   console.log(day.date);
//   console.log(day.weather);
// };


// ES2015 JS destructuring
// const logWeather = ({date, weather}): void => {
//   console.log(date);
//   console.log(weather);
// };

// TS destructuring with type annotations
const logWeather = ({ date, weather}: {date: Date; weather: string}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);


