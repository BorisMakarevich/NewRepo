" use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;  //Ссылка на обьект а не сам обьект Пазываеться передача по ссылке

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {    // function for copy object
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);  //Совершили клонирование обьекта а не ссылку на обьект

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);


const add = {
    d: 17,
    e: 20,
    r: {
        t: 'A',
        q: 'B'
    }
};

//  console.log(Object.assign(numbers, add));    //Обьединяем обьект add  s numbers
//{ a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 } -независимая поверхностная копия обьекта

//console.log(Object.assign({}, add)); // В пустой обьект клонируем add

const clone = Object.assign({}, add);  //Создали обьект и клонировали в него обьект add

clone.d = 55;

console.log(add);  
console.log(clone);  


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();    //Создаем копию массива  (s, po) index

newArray[1] = 'abibas';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['worldpress', 'livejurnal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];  //...это оператор spread который вытягивает автоматом все элементы массива
console.log(internet);                                    // Развернул на отдельные элементы


function log(a, b, c) {  
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);           // Функцией log вытягиваем массив различных данных

/// 4й вариант создания поверхностных копий обьектов

const array = ["a", "b"];

const newAarray = [...array]; //Теперь в этой переменной лежит копия массива array
console.log(newAarray);

///////////////////////////////

// Object spread operator

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
























