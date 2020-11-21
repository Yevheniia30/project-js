// ПРИМЕР 1
// const menu = document.querySelector(".js-nav");
// console.log(menu);

// const menuClickHandler = (event) => {
//   const current = event.target;
//   //
//   const prev = document.querySelector(".active");
//   // target - это элемент на которым мы кликнули, currentTarget - элемен на котором стоит eventListener
//   if (event.currentTarget === event.target) {
//     return;
//   }
//   // снимаем с элемента с существующим классом active класс и вешаем его на текущий элемент
//   if (prev) {
//     prev.classList.remove("active");
//   }
//   current.classList.add("active");
//   console.log(current);
//   console.log(prev);
// };

// menu.addEventListener("click", menuClickHandler);

// ПРИМЕР 2
// chatty events
console.log(_.throttle);
