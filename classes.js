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
