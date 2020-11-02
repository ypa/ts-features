// representing with object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// representing with array (what's the problem)
const pepsi = ['brown', true, 40];
pepsi[0] = 40; // wrong but it's allowed
pepsi[2] = 'brown'; // ditto


// representing with tuple by declaring types
const coke: [string, boolean, number] = ['brown', true, 40];
// coke[0] = 40 ; // error

// using Type alias for tuples
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const dietCoke: Drink = ['brown', true, 0];
