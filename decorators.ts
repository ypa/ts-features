@classDecorator
class Boat {
  // @testDecorator2
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }

  @logError("Oops! my bad")
  pilotSloppy(): void {
    throw new Error();
    console.log('swish');
  }

  @logError('Something bad happened')
  pilot2(@parameterDecorator speed: string,
         @parameterDecorator generateWake: boolean): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
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


function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value; // pilotSloppy function

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}



// new Boat().pilotSloppy();

function testDecorator2(target: any, key: string) {
  console.log(target.color);  // prints undefined because target is a prototype
}

function testDecorator3(target: any, key: string) {
  console.log(key); // prints formattedColor
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index); // prints pilot2 0
                           // pilot2 1
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);  // prints [Function: Boat]
}
