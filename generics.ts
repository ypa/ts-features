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

new ArrayOfAnything<string>(['abc', 'def', 'ghi']);
new ArrayOfAnything<number>([1, 2, 3]);
