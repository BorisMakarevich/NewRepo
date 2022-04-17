" use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest() {
        console.log("Test");  //Метод которфй будет работать внутри options
    }
};

options.makeTest();

   const {border, bg} = options.colors;            //Деструктуризация(вытягивание )свойств обьекта
   console.log(border);
//console.log(Object.keys(options).length);  // Получение количества элементов внутри обьекта


// console.log(options.name);

// delete options.name;
//  как перебрать ВСЕКЛЮЧИ И СВОЙСТВА В ОБЬЕКТЕ
// console.log(options);
// let counter = 0; //счетчик свойств обьекта
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key] [i]}`); //способы перебора значений или итерация
//             counter++;
//         }
//         } else {
//             console.log(`Свойство ${key} имеет значение ${options[key]}`); //способы перебора значений или итерация - перебор
//             counter++;
//         }
//     }
// console.log(counter);
