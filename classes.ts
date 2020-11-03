class Vehicle {

  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Carr extends Vehicle {
  constructor (public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProces(): void {
    this.drive();
    this.honk();
  }
}

const carr = new Carr(4, 'red');
carr.startDrivingProces();
