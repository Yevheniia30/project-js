let car = {
  color: "red",
  maxSpeed: "300",
  audio: {
    brand: "sony",
    speakers: 12,
  },
};

console.log(car.color);

car.color = "green";
console.log(car.color);

colorReset();
maxSpeedReset();

function colorReset() {
  car.color = "blue";
  console.log(car.color);
}

function maxSpeedReset() {
  car.maxSpeed = "150";
  console.log(car.maxSpeed);
}

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
