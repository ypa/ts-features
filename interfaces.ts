interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}


const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};


// Problem with vehicle with object literal type annotation
// It's hard to read the type, if we have other functions that take vehicle 
// then we'd have to duplicate this object literal type annotation.
// Not very nice.
// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken?: ${vehicle.broken}`);
// };


// Using Interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);
