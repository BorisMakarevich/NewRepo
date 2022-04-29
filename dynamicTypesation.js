" use strict";

// ToString

//1)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)

console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';
console.log(fontSize);

// To Number

//1)

console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To boolean

// 0, '', null, undefined, NaN - false!!!!!!!!!!!
//[], {}, strings и все остальное в JS --- TRUE !!!!!!
 
//1)
let switcher = null;

if (switcher) {
    console.log('Working...');
} 
switcher = 1;
if (switcher) {
    console.log('Working...');
} 

//2)

console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'444444'));


// let x = 5;
// console.log ([ ] + false - null + true);

// Какое будет выведено значение: let x = 5; alert( x++ ); ? 5

// Чему равно такое выражение: [ ] + false - null + true ? NaN

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 2
// NaN
//  let y = 1;  
//  let r = 45;
//  let p = 4578;
//  let x = y = r = p = 2;

// let a = 1;  
// let b = 2;


let a = [1, 2, 3]; 
let b = [1, 2, 3];
a == b;
console.log(   b );
console.log(!!(a && b));
console.log(0 || 7 || 2 || undefined || true ||5);

// Чему равна сумма [ ] + 1 + 2? 1 2 как строка

// Что выведет этот код: alert( "1"[0] )? 1

// Чему равно 2 && 1 && null && 0 && undefined ? null  И Запинаеться на лжи  ИЛИ запинаеться на правде

// Есть ли разница между выражениями? !!( a && b ) и (a && b)? true   2   if a=1 b=2

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ? 3   приоритет операций && выше

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? false

// Что выведет этот код: alert( +"Infinity" ); ? Infinity с типом данных число

// Верно ли сравнение: "Ёжик" > "яблоко"? false букв меньше у ежа

// Чему равно 0 || "" || 2 || undefined || true || falsе ? 2





























