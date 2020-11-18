// DOM
// СОБЫТИЯ

// ПРИМЕР 1
// const inputRef = document.querySelector(".name");
// console.log(inputRef);
// const input2Ref = document.querySelector(".surname");
// console.log(input2Ref);
// const input3Ref = document.querySelector(".check");
// console.log(input3Ref);
// const buttonRef = document.querySelector(".js-button");
// console.log(buttonRef);
// const spanRef = document.querySelector(".username");
// console.log(spanRef);
// const textRef = document.querySelector(".text");
// console.log(textRef);

// buttonRef.setAttribute("disabled", true);

// inputRef.addEventListener("change", (event) => {
//   textRef.textContent = event.target.value;
// });

// const handleInputFocus = (event) => {
//   event.preventDefault();
//   console.log("Got focus");
// };
// const handleInputBlur = (event) => {
//   console.log("Lost focus");
// };
// const handleInputChange = (event) => {
//   spanRef.textContent = event.target.value;
// };
// const handleCheckChange = (event) => {
//   event.preventDefault();
//   buttonRef.disabled = !event.target.checked;
// };

// inputRef.addEventListener("focus", handleInputFocus);
// inputRef.addEventListener("blur", handleInputBlur);
// input2Ref.addEventListener("input", handleInputChange);
// input3Ref.addEventListener("change", handleCheckChange);

// ПРИМЕР 2
const formRef = document.querySelector("form");
console.log(formRef);

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.elements.login.value);
  console.log(event.target.elements.password.value);
});

const data = new FormData(formRef);
console.log(data);
// data.forEach((item) => console.log(item));

// const titleEl = document.querySelector('.main-title');
// console.dir(titleEl);
// console.log(titleEl.classList);

// titleEl.textContent = 'Hello world!';
// titleEl.style.color = 'tomato';
// titleEl.style.fontSize = '40px';

// const listEl = document.querySelector('.main-list-item');
// console.log(listEl);
// console.log(listEl.classList);

// const subTitleEl = document.querySelector('.sub-title');
// console.log(subTitleEl);
// console.log(subTitleEl.classList)

// const imageEl = document.querySelector('.image');
// console.dir(imageEl);

// imageEl.alt = "It's me";
// imageEl.src='https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_960_720.jpg'

// const heading = document.createElement('h1');
// console.log(heading); // <h1></h1>

// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement('img');
// image.setAttribute('src', 'https://placeimg.com/640/480/nature');
// image.setAttribute('alt', 'nature');

// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">
