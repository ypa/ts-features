class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index];
  }
}


class ArrayOfStrings {
  constructor(public collection: string[]) { }


  get(index: number): string {
    return this.collection[index];
  }
}

// Using generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  }
}

const arr1 = new ArrayOfAnything<string>(['abc', 'def', 'ghi']);
const arr2 = new ArrayOfAnything<number>([1, 2, 3]);

// Using type inference with generics
const arr11 = new ArrayOfAnything(['abc', 'def', 'ghi']);
const arr22 = new ArrayOfAnything([1, 2, 3]);


// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Using generics for function's param
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['abc', 'def', 'ghi']);

// Using generics with type inference
printAnything(['abc', 'def', 'ghi']);



// Generic Constraints
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

// function printHousesOrCars<T>(arr: T[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].print();  // error
//   }
// }


// Define interface and using it as type constraint on generics
interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();  // all good now
  }
}

// printHousesOrCars([1, 2, 3, 4]); // Not allowed
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
