// функция для создания разметки динамической галереи карточек пользователей

const users = [
    {
        name: 'Jane',
        age: 20,
        gender: 'female',
        skills: ['HTML', 'CSS']
    },
    {
        name: 'Bob',
        age: 25,
        gender: 'male',
        skills: ['JS', 'REACT']
    },
    {
        name: 'Ann',
        age: 30,
        gender: 'female',
        skills: ['NODE', 'VUE']
    }
]
// console.table(objects);

const createList = user => {
    const containerEl = document.createElement('div');
    containerEl.classList.add('user-card');

    const titleEl = document.createElement('h2');
    titleEl.classList.add('user-name');
    titleEl.textContent = user.name;

    const descrEl = document.createElement('p');
    descrEl.textContent = `Ade: ${user.age}, gender: ${user.gender}, skills: ${user.skills.join(', ')}`;

    containerEl.append(titleEl, descrEl);
    
    return containerEl;
}

const userCard = users.map(user => createList(user))

console.log(userCard);

const usersListEl = document.querySelector('.js-users');
usersListEl.append(...userCard);

// users.forEach(user => {
//     console.log(createList(user))
// })

// console.log(createList(users[0]));
// console.log(createList(users[1]));
// console.log(createList(users[2]));


// const categoriesEl = document.createElement('ul');
// console.log(categoriesEl);

// const itemsEl = document.createElement('li');
// console.log(itemsEl);

// const titleEl = document.createElement('h2');
// titleEl.textContent = cat.name;
// console.log(titleEl);

// const descrEl = document.createElement('p');
// descrEl.textContent = `${cat.name} is ${cat.age} years old`;
// console.log(descrEl);

// function for creating elements
