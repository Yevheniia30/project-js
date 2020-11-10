const cat = {
    name: 'Meow',
    age: 5,
};
    



const categoriesEl = document.createElement('ul');
console.log(categoriesEl);

const itemsEl = document.createElement('li');
console.log(itemsEl);

const titleEl = document.createElement('h2');
titleEl.textContent = cat.name;
console.log(titleEl);

const descrEl = document.createElement('p');
descrEl.textContent = `${cat.name} is ${cat.age} years old`;
console.log(descrEl);
