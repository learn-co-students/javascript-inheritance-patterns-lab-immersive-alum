function Point(x, y) {
    this.x = x;
    this.y = y;
    this.toString = function() {
      return `${x}, ${y}`;
    };
  }
  
  function Shape() {}
  
  Shape.prototype.addToPlane = function(x, y) {
    this.position = new Point(x, y);
  };
  
  Shape.prototype.move = function(x, y) {
    this.position = new Point(x, y);
  };
  
  function Circle(radius) {
    Shape.call(this);
  
    this.radius = radius;
  }
  
  Circle.prototype = Object.create(Shape.prototype);
  
  Circle.prototype.constructor = Circle;
  
  Circle.prototype.area = function() {
    return this.radius * this.radius * 3.141592653589793238462;
  };
  Circle.prototype.circumference = function() {
    return this.radius * 2 * 3.141592653589793238462;
  };
  
  Circle.prototype.diameter = function() {
    return this.radius * 2;
  };
  
  function Side(l) {
    this.length = l;
  }
  
  function Polygon(sides) {
    Shape.call(this);
  
    this.sides = sides;
  }
  
  Polygon.prototype = Object.create(Shape.prototype);
  
  Polygon.prototype.constructor = Polygon;
  
  Polygon.prototype.perimeter = function() {
    var perim = 0;
  
    for (let i = 0, l = this.sides.length; i < l; i++) {
      perim += this.sides[i].length;
    }
  
    return perim;
  };
  
  Polygon.prototype.numberOfSides = function() {
    return this.sides.length;
  };
  
  function Quadrilateral(side1, side2, side3, side4) {
    Polygon.call(this, [
      new Side(side1),
      new Side(side2),
      new Side(side3),
      new Side(side4)
    ]);
  }
  
  Quadrilateral.prototype = Object.create(Polygon.prototype);
  
  Quadrilateral.prototype.constructor = Quadrilateral;
  
  function Triangle(side1, side2, side3) {
    Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)]);
  }
  
  Triangle.prototype = Object.create(Polygon.prototype);
  
  Triangle.prototype.constructor = Triangle;
  
  function Rectangle(width, height) {
    Quadrilateral.call(this, width, height, width, height);
  
    this.width = width;
  
    this.height = height;
  }
  
  Rectangle.prototype = Object.create(Quadrilateral.prototype);
  
  Rectangle.prototype.constructor = Rectangle;
  
  Rectangle.prototype.area = function() {
    return this.width * this.height;
  };
  
  function Square(side) {
    Rectangle.call(this, side, side);
  }
  
  Square.prototype = Object.create(Rectangle.prototype);
  
  Square.prototype.constructor = Square;
  
  Square.prototype.listProperties = function() {
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        console.log('square ' + prop + ' = ' + this[prop]);
      }
    }
  };
  
  function init() {
    let sq = new Square(7);
  
    sq.listProperties();
  }
  
  init();
  