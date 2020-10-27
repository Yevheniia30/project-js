const numbers = [1, 2, 3];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Функциональный forEach
numbers.forEach(num => console.log(num));

// Указываем параметр idx если нужен доступ к счетчику
numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));
