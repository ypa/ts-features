interface Reportable {
  summary(): string;
}


const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
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
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
