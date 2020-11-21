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
