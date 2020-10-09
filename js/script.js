"use strict";
// дальше идет весь код файла

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;
console.log(wordBlanks); // Change this line
// Only change code above this line

// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line
//   let arrayOfValues = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (prop in array[i]) {
//       arrayOfValues.push(array[i][prop]);
//     }
//   }
//   return arrayOfValues;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];
// console.log(getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
//  []

// class Hater {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   sayName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// }
// let hater1 = new Hater("norman", "osborn");
// hater1.sayName();
// let hater2 = new Hater("norma", "osborn");
// hater2.sayName();
// let hater3 = new Hater("nor", "osborn");
// hater3.sayName();
// let drivers = ["ivan", "andrew", "olha", "anna"];

// for (let i = 0; i < drivers.length; i++) {
//   console.log(drivers[i]);
// }
// let car = {
//   color: "red",
//   maxSpeed: "300",
//   audio: {
//     brand: "sony",
//     speakers: 12,
//   },
//   update: speedChange,
// };

// car.update();

// function speedChange() {
//   console.log(car.maxSpeed);
// }

// let color = !car.color == "red" ? "red" : "fuck";
// console.log(color);
// if (car.color == "red") {
//   console.log("true");
// } else if (car.color == "green") {
//   console.log("car is green");
// } else {
//   console.log("color is not found");
// }

// alert("DKA-DEVELOP");

/*
alert("1    ");
alert("2    ");
alert("3    ");
*/
// let age_2 = false;
// console.log(age_2);
// console.log(typeof age_2);
// let firstName = (age = 30);
// let age_1 = `he said ${age_2} "hello"`;

// let age_3 = 5;
// let pin = 12;
// pin = age_3;
// console.log(pin);

// console.log(age_1);
// console.log(typeof age_1);
// firstName = 100;
// age = 30;
// let - объявляет переменную, firstName - имя переменной (идентификатор), 10 - литерал (значение переменной)числового типа
// знак = - оператор инициализации
// age_2 = age_3;
// console.log("age_1=", age_1, "age_3=", age_3, "age_1+age_2=", age_1 * age_2);

// age_2 = age_3;
// console.log(age_1 + age_2);
// console.log(firstName + age);
