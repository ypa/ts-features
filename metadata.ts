import 'reflect-metadata'

// const plane = {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);
// 
// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// console.log(note);
// console.log(height);

// Reflect.defineMetadata('note', 'hi there', plane, 'color'); // associate metat data to plane's color property
// 
// const note = Reflect.getMetadata('note', plane, 'color');
// 
// console.log(note);

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Hi There')
  fly(): void {
    console.log('vrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  }
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

