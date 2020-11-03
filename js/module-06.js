const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

console.log(users.sort(sortByActiveDays));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/*
 * Фильтруем четные числа. Далее, на результате метода filter,
 * вызываем map и множим на 2. После чего на результате
 * метода map вызываем reverse.
 */

const result = numbers
  .filter(x => x % 2 === 0)
  .map(y => y * 2)
  .reverse();

console.log(result);

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}






// const numbers = [1, 2, 3, 4, 5];

// const summ = numbers.reduce((acc, value) => acc + value, 0);

// console.log(summ); // 15

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдем по всем элементам коллекции и прибавим значения свойства likes
// // к аккумулятору, начальное значаение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// // для подсчета лайков из коллекции
// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(countLikes(tweets)); // 32



// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// const nums = [5, 10, 15, 20, 25];
// console.log(nums.map(num => num * 3));
// console.log(nums.filter(num => num > 16));
// console.log(nums.filter(num => num === 18));
// console.log(nums.filter(num => num < 15));

// // const users = [
// //   { name: 'Mango', isActive: true },
// //   { name: 'Poly', isActive: false },
// //   { name: 'Ajax', isActive: true },
// //   { name: 'Chelsey', isActive: false },
// // ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// // const activeUsers = users.filter(user => user.isActive);
// // console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// // const inactiveUsers = users.filter(user => !user.isActive);
// // console.log(inactiveUsers);

// // console.log(nums.find(num => num > 5));

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false
// console.log(allAvailable);
// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true
// console.log(anyAvailable);


