const profile = {
  fname: 'Joe',
  lname: 'Doe',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// destructuring objects with type annotations
const { age, fname }: { age: number, fname: string } = profile;

// destructuring nested fields without type annotations with ES2015
// const { coords: { lat, lng} } = profile;

// destructuring nested fields with type annotations
const { coords: { lat, lng } }: { coords: { lat: number, lng: number} } = profile;
