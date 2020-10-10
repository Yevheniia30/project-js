"use strict";
// дальше идет весь код файла

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Setup
function abTest(a, b) {
  // Only change code below this line


    console.log(abTest);
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);



//
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
