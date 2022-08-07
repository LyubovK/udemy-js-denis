// функции конструкоры - становятся конструкторами, когда вызываются с операторами new
// должны именоваться с большой буквы
// классы и конструкторы
// классы - это абстрактное понятие,

function Product(brand, price, discount) {
  // 1. создается ноый объект
  // 2. на этот объект устанавливается ссылка this
  // 3. функция возвращает этот объект
  this.brand = brand;
  this.price = price;
  this.discount = discount;
  this.modal;
  //   this.getPriceWithDiscount = () => {
  //     return (this.price * (100 - this.discount)) / 100;
  //   };
}

// класс - собственный тип данных

class Product_cl {
  constructor() {}
}

// прототипирование  - ОБЪЕКТ, В КОТОРОМ ХРАНЯТСЯ СВОЙСТВА И МЕТОДЫ
//спец свойство, которое остлеживается js
// при вызове сначала ищеться внутри самого объекта, а потом по цепочке прототипов
Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 200, 20);

console.log(apple.getPriceWithDiscount());
console.log(samsung.getPriceWithDiscount());

// Наследование (расширение свойство или переиспользование)
//Object.create

const protoForObj = {
  sayHello() {
    return 'Hello world';
  },
};

const obj = Object.create(protoForObj, {
  firstName: {
    value: 'Denis',
  },
});
// console.log(obj);

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.sayHello = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const user = new User('Liuba', 'Kytsenko');

// Customer
function Customer(firstName, lastName, memberShip) {
  //функциональное наследование
  // call() дает возможность вызвать функции с заданным контекстом
  User.call(this, firstName, lastName);

  //аналогично можно сделать следующее:
  //   User.apply(this, arguments);

  this.memberShip = memberShip;
}

//прототипное наследование (потеря констроктора)

Customer.prototype = Object.create(User.prototype);
//возврат конструктора (так как мы теряем ссылку на саму функцию-конструктор)
Customer.prototype.constructor = Customer;

Customer.prototype.getMemberShip = function () {
  return this.memberShip.toUpperCase();
};

const customer = new Customer('Dasha', 'Kytsenko', 'Basic');
console.log(customer.getMemberShip());
