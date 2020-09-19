"use strict";
// дальше идет весь код файла

// 1. перезаписать переменную countryName чтобы первая буква была заглавной, а остальные строчные

// 2. используя switch прописать message

const countryName = "индиЯ";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
      message = NO_DELIVERY;
  }
}
// console.log(price);

if (price > 0) {
  //   // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);
// document.getElementById("title");
// console.log(document.getElementById("title"));
// console.log(typeof document.getElementById("title"));

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
