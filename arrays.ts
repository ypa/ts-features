// relying on type inference
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// array of array of string type annotation
const carsByMake: string[][] = [];

// Why use typed arrays?
// Help with inference when extracting values
const myCar = carMakers[0];
const myCarPopped = carMakers.pop();

// .. Prevent incompatible values
// carMakers.push(100); // error

// .. Help with 'map', 'forEach', 'reduce' etc
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// .. Flexible (Union) type array annotation
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-11');
importantDates.push(new Date());
// importantDates.push(10); // error
