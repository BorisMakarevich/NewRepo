" use strict";

// let str = 'some';
// let strObj = new String(str);

 // console.log(typeof(str));
 // console.log(typeof(strObj));

// console.dir([1,2,3]);


const soldier = {   //Prototype oll of the soldiers
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);         // Создаю обьект jonh который будет прототипно наследоваться от soldier
//Object.setPrototypeOf(jonh, soldier);  запомнить как вторая команда для того же
// const jonh = {
//     health: 100
// };

 //jonh.__proto__ = soldier;  //Устаревшее не используеться

// Object.setPrototypeOf(jonh, soldier);         //1ым аргументом идет элемент которому хочу назначить прототип

 //console.log(jonh.armor);
jonh.sayHello();
console.log(jonh);
 






























































