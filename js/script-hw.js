"use strict";
// последний индекс - это длина минус 1, т.к. индексация идет с нуля
const basket = [15, 38, 52, 428, 10, 25, 99];
let total = 0;
console.log(basket.length);
// for используем, если нужен доступ с элементам, переопределение значения элумента
for (let i = 0; i < basket.length; i += 1) {
  console.log(basket[i]);

  if (basket[i] % 2 !== 0) {
    console.log("even");
    total += basket[i];
  }
}
console.log(total);
// for of используем когда доступ к єлементам не нужен(например нужно только общая сумма)
// for (const value of basket) {
//   total += value;
// }
// console.log(total);
// Пустой массив
// option = 1;
// let message;
// // значение кейса - это значение переменной (может быть и строка)
// switch (option) {
//   case 1:
//     message = `you can take your goods tomorrow at 12 a.m. at our office`;
//     break;

//   case 2:
//     message = `the courier will deliver the order tomorrow from 9 a.m. till 6 p.m`;
//     break;

//   case 3:
//     message = `the parcel will be sent today`;
//     break;

//   default:
//     message = `the manager will call you`;
// }

// console.log(message);

// for (let i = 20; i > -20; i -= 3) {
//   console.log(i);
// }
// const stars = 6;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log(`undefined`);
// }

// console.log(`Стоимость проживания равна $${price} за одни сутки`);
// дальше идет весь код файла
// const orderPieces = 4;
// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_DENIED = "Недостаточно средств на счету!";
// let totalPrice;
// let balanceCredit;
// let message;
// totalPrice = orderPieces * pricePerDroid;
// console.log(totalPrice);
// balanceCredit = credits - totalPrice;
// console.log(balanceCredit);

// if (orderPieces === 4) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (orderPieces === 10) {
//   message = ACCESS_DENIED;
// }
// console.log(message);
// if (false) {
//   // body
//   // НЕ ВЫПОЛНЯЕТСЯ
// }
// if (true) {
//   // body
//   // ВЫПОЛНЯЕТСЯ
// }
// if (0) {
//   console.log("asd");
// }
// if (5) {
//   console.log("qwe");
// }

// if (5 > 30) {
//   console.log("omg");
// } else console.log("oops");
// //  проверяет до первого совпадения
// const salary = 1500;
// if (salary < 500) {
//   console.log("level 1");
// } else if (salary > 500 && salary < 1500) {
//   console.log("level 2");
// } else if (salary >= 1500 && salary < 3000) {
//   console.log("level 3");
// } else {
//   console("level 4");
// }
// const userPassword = "jqueryismyjam";

// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;
// if (userPassword === "jqueryismyjam") {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else if (userPassword === "bla") {
//   message = ACCESS_DENIED;
// }
// console.log(message);

// const sub = "free";

// const canAccessContent = sub === "free";

// console.log("is there access to content?", canAccessContent);
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("can to open chat? ", canOpenChat);
// console.log(Boolean(0));
// const age = 25;

// const firstMessage = `${name}'m ${age} years old`;
// console.log(firstMessage);

// const amount = 5;
// const order = `вы заказываете ${amount * 2} холодильников`;
// console.log(order);

// let brand = "samSUNG";
// console.log(brand);
// console.log(brand.slice(3).toLowerCase());

// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
// console.log(brand);

// console.log(Math.PI);

// console.log(Math.random());

// Math.random() * (max - min) + min;
// const min = 30;
// const max = 50;
// console.log(Math.round(Math.random() * (max - min) + min));

// let base = prompt("enter number");
// base = Number(base);
// console.log(base);

// let power = prompt("enter power");
// power = Number(power);
// console.log(power);

// console.log(base ** power);

// const result = Math.pow(base, power);
// console.log(base ** power);
// let salary = 1200.15789;

// salary = Number(salary.toFixed(2));

// console.log(salary);

// let elementWidth = "20.25px";
// elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);
// console.log(typeof elementWidth);
// let amount = prompt("enter");
// amount = Number(amount);
// console.log(amount);
// console.log(typeof amount);
// const shouldRenew = confirm("Хотите продлить подписку?");
// console.log(shouldRenew);
// const name = "«Генератор защитного поля»"; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// console.log(firstMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'
