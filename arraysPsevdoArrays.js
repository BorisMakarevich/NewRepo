" use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {         //сортирует массив чисел от меньшего к большему
    return a - b;
}

// arr.forEach(function(item, i, arr) {                      // гибко перебрать все элементы массива 0: 2 внутри массива 2,3,6,8,10
//     console.log(`${i}: ${item} внутри массива ${arr}`);                               //1: 3 внутри массива 2,3,6,8,10
// });                                                                                    //2: 6 внутри массива 2,3,6,8,10



// arr[99] = 0;
// console.log(arr.length);

//arr.pop();   удаляет последний элемент массива
//arr.push(10);   добавляет элемент в конец массива


//console.log(arr);

// for(let i = 0; i < arr.length; i++) {   //цикл перебора значений массива по очереди каждый элемент
//     console.log(arr[i]);
// }

// for (let value of arr) {       // то же самое методом for of и можно использовать brake continue 
//         console.log(value);    // если нам придеться когда то остановить цикл
// }                     
   

const str = prompt("", "");   //перечень товаров через запятую от заказчика
const products = str.split(", "); 
products.sort();                         // сортирует по алфавиту по умолчанию
//console.log(products);                //превращаем в массив с разделителем в виде запятой
console.log(products.join('; '));       //превращает массив строк в строку 












































