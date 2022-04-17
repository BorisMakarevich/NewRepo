" use strict";

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {  
    console.log(`Я учу: ${lang}`);
    callback();//collback это функция которая выполниться после выполнения другой функции
}

function done() {
     console.log('Я прошел этот урок!');
     console.log('Мне очень хороше!');

}

// learnJS('JavaScript', function() {
//     console.log();
// });
learnJS('JavaScript', done);

























