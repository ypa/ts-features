class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}


function testDecorator(target: any, key: string): void {
  console.log('Target:', target);  // Target: Boat { pilot: [Function] }
  console.log('Key:', key);  // Key: pilot
}

// This code is basically what the decorator will do
// It calls the decorator function with a prototype and the key
// which is the name of the function
testDecorator(Boat.prototype, 'pilot');
// prints out same:
// Target: Boat { pilot: [Function] }
// Key: pilot
