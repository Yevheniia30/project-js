"use strict";
//  ЗАДАЧА
const schedule = {
  items: [],
  log: [],

  // пишем функцию которая добавляет задание
  addItem(text) {

  },
// ф-ция которая отмечает действие выполненным
  markDone(id) {
    
  },
  

}
// вызываем ф-цци
schedule.addItem('Buy bread');
schedule.addItem('Buy potato');

schedule.markDone();



// деструктуризация массивов
const arr = [5, 3, 2];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
const [a, b, c] = arr;

console.log(arr);
console.log(a, b, c);




// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// const obj1 = {
//   name: 'Alex',
//   age: 25
// };
// const obj2 = {
//   name: 'Manu',
//   age:10
// }
// const obj3 = {
//   name: 'Bob',
//   age:8
// }

// function sayHello(human, pet = {}) {
//   const { name, age } = human;
//   const { name: petName='NotFound', age: petAge=0 } = pet;

//   console.log(`Hello my name is ${name}, I'm ${age} years old!`);
//   // console.log(`My best friend is ${cat.name}, he is ${cat.age} years old.`);
//   console.log(`My best friend is ${petName}, he is ${petAge} years old.`);
// }

// sayHello(obj1, obj2);
// sayHello(obj1);

// const lastWeek = [2, 5, 10, 11];
// const currentWeek = [12, 50, 1, 14];
// const nextWeek = [20, 52, 100, 110];

// const all = [...lastWeek, 'hello', ...currentWeek, 'world', ...nextWeek];
// console.log(all);

// //пример
// const phone = {
//   model: "qweasd",
//   battery: 100,
//   isOn: false,
//   // ппишем функцию включающую телефон
//   turnOn() {
//     this.isOn = true;
//   },
//   // функция снижения заряда в зависимости от длительности работы
//   work(time) {
//     // условие чтобі заряд не был меньше 0
//     if (this.battery - time < 0) {
//       this.battery = 0;
//     } else {
//       this.battery -= time;
//     }
//   },
// };
// console.log(phone);
// phone.turnOn();
// console.log(phone);
// // 80 - аргумент ф-ции work присваевается параметру time
// phone.work(80);
// console.log(phone);
// phone.work(80);
// console.log(phone);

// МЕТОДЫ ОБЪЕКТА
// const man = {
//   name: "Bobby",
//   age: 40,
//   salary: 1000,
//   // пишем функцию внутри объекта
//   work: function () {
//     console.log("I'm working");
//   },
//   // или
//   walk() {
//     console.log("I'm walking");
//   },
//   // пишем функцию в которой обращаемся к свойству age через this
//   birthdayHappened() {
//     this.age += 1;
//   },
//   // пишем функцию в которой обращаемся к свойству name через this
//   addSecondName() {
//     this.name += " Jack";
//   },
//   changeName() {
//     this.name = "Charlie";
//   },
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };
// // вызываем функции work b walk
// man.work();
// man.walk();

// // ДОСТУП К ОБЪЕКТУ ЧЕРЕЗ THIS
// console.log(man); //видим возраст 40
// // вызываем функцию birthdayHappened
// man.birthdayHappened();
// console.log(man); //видим возраст 41
// // вызвали функцию еще раз и видим возраст 42
// man.birthdayHappened();
// console.log(man);
// // вызываем функцию которая добавляет к имени второе имя
// man.addSecondName();
// console.log(man);
// // вызываем функцию которая меняет имя
// man.changeName();
// console.log(man);
// // вызываем функцию sayHello
// man.sayHello();
// // изменим имя обратно и опять візовем sayHello
// man.name = "Bobby";
// man.sayHello();

// // ПЕРЕБОР ключей объекта циклом for in
// // посчитаем сумму всех числовых значений ключей объекта
// let sum = 0;
// for (const key in man) {
//   console.log("Ключ:", key);
//   const value = man[key];

//   if (typeof value === "number") {
//     sum += value;
//   }
// }

// // то же самое через for of
// // const arrayValues = Object.values(man);
// // console.log(arrayValues);
// // let sum = 0;
// // for (const value of arrayValues) {
// //   console.log(value);
// //   if (typeof value === "number") {
// //     sum += value;
// //   }
// // }
// console.log("Сумма:", sum);
// const users = {
//   name: "Alex",
//   eyes: "blue",
//   age: 25,
//   legs: ["left", "right"],
//   hands: ["left", "right"],
//   hair: false,
//   pets: {
//     cats: [],
//     dogs: [],
//   },
// };
// //   {
// //     name: "Jane",
// //     eyes: "green",
// //     age: 30,
// //     legs: ["left", "right"],
// //     hands: ["left", "right"],
// //     hair: true,
// //     pets: {
// //       cats: [],
// //       dogs: [],
// //     },
// //   },
// // ];
// // console.log(users);
// // console.log(users[0]);
// // console.log(users[1]);

// // чтобы вывести список определенных значений (напр.имен) объектов массива
// // перебираем массив
// // for (let i = 0; i < users.length; i += 1) {
// // сщздаем переменную для каждого объекта массива
// // const user = users[i];
// //выводим значения в формате (имя объекта.свойство) одно или несколько через запятую
// // console.log(user.name, user.age, user.eyes);
// // }

// // вычисляемые свойства
// // пишем функцию. куда передаем кота и возвращаем значение определенного поля
// const getValue = function (obj, key) {
//   // возвращаем значение ключа обїекта
//   return obj[key];
// };
// const cat = {
//   name: "Manu",
//   age: 10,
// };
// // передаем а парметры функции аргументы в параметр key передаем значения ключей
// console.log(getValue(cat, "age")); // 10
// console.log(getValue(cat, "name")); // Manu
// console.log(getValue(cat, "eyes")); // undefined
// console.log(getValue(users, "hands")); // left right
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]
// console.log(keys);
// console.log(values);
// console.log(entries);
// console.log();

// const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];

// // Вертикальная запись удобнее для чтения
// const updatedHouses = [
//   ...houses.slice(0, 1),
//   "Frey of the Crossing",
//   ...houses.slice(2),
// ];

// console.log(updatedHouses);
// // ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log("Key: ", key);
// }
// for (const key in hotel) {
//   console.log("Value: ", hotel[key]);
// }

/*
 * Key: name
 * Key: stars
 * Key: capacity
 */

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   const loginValid = login.length >= min && login.length <= max;
//   return loginValid;
//   // return login.length >= 4 && login.length <= 16 ? "true" : "false";
// }

// function isLoginUnique(allLogins, login) {
//   "use strict";
//   // Write code under this line
//   // return allLogins.includes(login) ? "false" : "true";
//   const loginUnique = allLogins.includes(login);
//   if (loginUnique === true) {
//     return false;
//   }
//   return true;
// }

// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   if (isLoginValid(login) === false) {
//     message = ERROR;
//   } else if (isLoginUnique(allLogins, login) === false) {
//     message = REFUSAL;
//   } else if (isLoginUnique(allLogins, login) === true) {
//     allLogins.push(login);
//     message = SUCCESS;
//   }
//   return message;
// }
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// console.log(addLogin(logins, "Ajax"));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// создаем массив из аргументов функции
// олдскул метод
// const fn = function () {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4);
// fn(1, 2, 3, 4, 5);

// современный метод с помощью rest
// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4);
// fn(1, 2, 3, 4, 5);

// напиши функцию slugify(string) которая получает массив и возвращает URL-slug

// const slugify = function (string) {
//   return string.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("The quick brown fox jumped over the lazy dog"));
// // 'jumped'

// console.log(slugify("Google do a roll"));
// // 'Google'

// console.log(slugify("May the force be with you"));

// напиши функцию Logins(logins, loginToFind) для поиска логина
// если логина нет - сообщение "not found"
// если логин найден - сообщение "welcome"
// создаем переменную со списком логинов
// const logins = ["qwe", "asd", "zxc"];
// РЕШЕНИЕ ЧЕРЕЗ FOR
// пишем функцию с параметрами
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `user ${loginToFind} found`;
//     }
//   }
//   return `user ${loginToFind} not found`;
// };
// РЕШЕНИЕ ЧЕРЕЗ ТЕРНаРНИК
// const findLogin = function (allLogins, loginToFind) {
//   const message = allLogins.includes(loginToFind)
//     ? `user ${loginToFind} found`
//     : `user ${loginToFind} not found`;
//   return message;
// };
// РЕШЕНИЕ 2 ЧЕРЕЗ ТЕРНАРНИК БЕЗ ИСПОЛЬЗОВАНИЯ ПЕРЕМЕННОЙ
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `user ${loginToFind} found`
//     : `user ${loginToFind} not found`;
// };

// присваиваем парметрам аргументы и вызываем функцию
// console.log(findLogin(logins, "qwe"));
// console.log(findLogin(logins, "asdf"));
// console.log(findLogin(logins, "zxc"));

// // напиши функцию logItems для перебора и логирования массива
// const logItems = function (items) {
//   //параметры
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(["mango", "kiwi", "poly"]); //аргументы, они подставляются в параметрыб то есть в items
// logItems([1, 2, 3, 4, 5]);
// logItems(["clock", "pen", "chair"]);

// // напиши функцию calculateTotalPrice котора я принимает массив чисел(items) и возвращает их сумму
// const calculateTotalPrice = function (items) {
//   console.log(items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
// интерпретотор видит return и возвращает его значение на место calculateTotalPrice([])
// console.log(calculateTotalPrice([1, 2, 3])); //это вызов функции, в него происходит return
// console.log(calculateTotalPrice([5, 10, 20, 30]));
// console.log(calculateTotalPrice([100, 200, 300]));
// const add = function () {
//   console.log("выполнение тела функции");
// };

// add();

// const getItemsString = function (array) {
//   "use strict";
//   // Write code under this line
//   let result = "";
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

// const fn = function (value) {
//   if (value < 50) {
//     return "менше 50";
//   } else {
//     return "больше 50";
//   }
//   return 12213;
// };
// console.log(fn(10));
// console.log(fn(80));

// const fnA = function () {
//   console.log("выполняется функция А");
//   fnB();
// };
// const fnB = function () {
//   console.log("выполняется функция В");
//   console.log(value);
// };
// const fnC = function () {
//   console.log("выполняется функция С");
// };
// fnA();
// fnB();
// fnC();

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
