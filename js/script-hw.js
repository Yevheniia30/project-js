"use strict";

const add = function () {
  console.log("выполнение тела функции");
};

add();

const getItemsString = function (array) {
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};
console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

const fn = function (value) {
  //   if (value < 50) {
  //     return "менше 50";
  //   } else {
  //     return "больше 50";
  //   }
  return 12213;
};
console.log(fn(10));
console.log(fn(80));

const fnA = function () {
  console.log("выполняется функция А");
};
const fnB = function () {
  console.log("выполняется функция В");
};
const fnC = function () {
  console.log("выполняется функция С");
};
fnA();
fnB();
fnC();

// ПОЧИТАТЬ ДОКИ ВСЕХ МЕТОДОВ

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля.");
//   } else if (amount > balance) {
//     console.log("Недостаточно средств на счету.");
//   } else {
//     console.log("Операция снятия средств проведена.");
//   }
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.

// const sum = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5)); //  15

// const fn = function (...args) {
// В переменной args будет полноценный массив
// };

// a, b, c это параметры
// const add = function (a, b, c) {
//   return a + b + c;
// };

// // 1, 2, 3 это аргументы
// const result = add(1, 2, 3);
// console.log(result); // 6

// // 5, 10, 15 это аргументы
// console.log(add(5, 10, 15)); // 30

// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
// count(); // countFrom = 0, countTo = 10, step = 1

// метод splice

// const cards = ["card1", "card2", "card3", "card4", "card5"];

// const remove = "card3";
// const index = cards.indexOf(remove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// const cardToInsert = "card6";
// cards.splice(0, 0, 235, 448, cardToInsert);
// console.table(cards);
// скрипт который считает сумму элементов двух массивов(use concat)
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const arrays = array1.concat(array2);
// for (const number of arrays) {
//   total += number;
// }
// console.log(total);
// console.log(arrays);

// const title = "JavaScript Is Amazing";
// const normalizedTtitle = title.toLowerCase();
// console.log(normalizedTtitle);
// console.log(normalizedTtitle);
// const words = normalizedTtitle.split(" ");
// console.log(words);

// const wordsone = title.toLowerCase().split(" ").join("_");
// console.log(wordsone);
//скрипт который заменяет регистр каждого символа в строке (use split)

// const string = "JavaScriPT";
// const letters = string.split("");
// let alterString = "";

// console.log(letters);
// for (const letter of letters) {
// if (letter === letter.toLowerCase()) {
// console.log(`єта буква в нижнем регистве - `, letter);
//   alterString += letter.toUpperCase();
// } else {
//   alterString += letter.toLowerCase();
// }
// alterString +=
//   letter === letter.toLowerCase()
//     ? letter.toUpperCase()
//     : letter.toLowerCase();

// console.log(letter);
// }
// console.log(alterString);
// скрипт который объединяет все элементы массива в одну строку(use for and join)
// const friends = ["mango", "poly", "ajax", "kiwi"];
// const string = friends.join(", ");
// console.log(string);
// let string = "";
// for (const friend of friends) {
//   string += friend + ", ";
// }
// string = string.slice(0, string.length - 2);
// console.log(string);
// console.log(string.length);
// скрипт поиска самого маленького или самого большого числа в массиве
// const numbers = [28, 15, 14, 105, 10, 147];
// let biggestNumber = numbers[0];

// console.log(smallestNumber);

// for (const number of numbers) {
// console.log(number);
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log("biggest:", biggestNumber);
// const logins = ["mango", "poly", "ajax", "alter"];
// const loginToFind = "poly";
// let message = `not found`;

// const message = logins.includes(loginToFind) ? "welcome" : "not found";
// console.log(message);
// console.log(logins.includes(loginToFind));

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `welcome`;
//     break;
//   }
// }
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = `welcome`;
//     break;
//   }

// } else if (login !== loginToFind) {
//   message = `login isn't found`;
// }

// console.log(message);
// последний индекс - это длина минус 1, т.к. индексация идет с нуля
// const basket = [15, 38, 52, 428, 10, 25, 99];
// let total = 0;
// console.log(basket.length);
// for используем, если нужен доступ с элементам, переопределение значения элумента
// for (let i = 0; i < basket.length; i += 1) {
//   console.log(basket[i]);

//   if (basket[i] % 2 === 0) {
//     console.log(`${basket}-even`);
//     total += basket[i];
//   }
// }
// console.log(total);
// for of используем когда доступ к єлементам не нужен(например нужно только общая сумма)
// for (const value of basket) {
//   if (value % 2 !== 0) {
//     console.log(`пропускаем`, value);
//     continue;
//   }
//   console.log(`${value} - even`);
//   total += value;
// }

// console.log("total:", total);
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
