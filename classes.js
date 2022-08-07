const methodName = 'setPrice';
class Product {
  // если класс принимает какие-то аргументы
  // обычный метод, может принимать те аргументы, которые будут переданы при инициализации класса
  constructor(brand, price, discount) {
    this._brand = brand;
    this.price = price;
    this.discount = discount;
  }

  get brand() {
    return this._brand;
  }

  set brand(name) {
    this._brand = name;
  }

  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100;
  }
  [methodName](newPrice) {
    this.price = newPrice;
  }

  //если Ваш метод не требует обращение в зис, возможно это статический метод
  static plus(x, y) {
    return x + y;
  }
}

const newProduct = new Product('Samsung', 200, 10);
console.log(newProduct);

// наследование

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Customer extends User {
  constructor(firstName, lastName, memberShip) {
    super(firstName, lastName);
    this.memberShip = memberShip;
  }
  getFullName() {
    const parentRes = super.getFullName();
    return `Hello ${this.firstName} ${this.lastName} - ${this.memberShip}`;
  }
}

const customer = new Customer('Liuba', 'Kytsenko', 'basic');
console.log(customer.getFullName());
