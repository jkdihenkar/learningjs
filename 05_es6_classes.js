// runs with node
// > node -v
// v8.9.4
// > node ${filename}

class Shape {
  constructor() {
    this._dimensions = [...arguments];
    this.introduce();
    this.sayDraw();
    this.sayArea();
    console.log();
  };
  introduce() {
    console.log(`WHOAMI => I'm a ${this._name()} ... `);
  };
  _name() { return "GenericShape"};
  draw() { return "Dumb"};
  area() { return "Dumb"};
  sayDraw() {
    console.log(`DRAW => something should be made of ${this.draw()}`);
  };
  sayArea() {
    console.log(`AREA: My area is ${this.area()} `);
  };
};

class Circle extends Shape {
  constructor() {
    // SPREAD example
    super(...arguments);
  };
  _name() { return "Circle" };
  draw() { return `Circle with radius: ${this._dimensions[0]}`};
  area() { return Math.PI * this._dimensions[0] * this._dimensions[0] };
  richHeritage() {
    console.log(`Parent(${super._name()}) :: ${super.draw()} , ${super.area()}`);
  };
};

var m = new Shape(1, 7, 13);

var c = new Circle(100);
c.richHeritage();
