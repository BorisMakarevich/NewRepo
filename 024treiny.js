/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

' use strict';

// Код возьмите из предыдущего домашнего задания











let numberOfFilms;

const personalMovieDB = {

    start() {
        
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }

    },




    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,




    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB() {
        if (personalMovieDB.privat == false) {
            return (true);
        } else if(personalMovieDB.privat == true) {
            return(false);
        }
    },

    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
               
           
           
            if (personalMovieDB.genres != '' &&  personalMovieDB.genres != null) {
                 personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
                 console.log('done');
                 
            }  else {
                i--;
                console.log('error');
            }
             
           // arr.forEach(function(item, i, arr) {                      // гибко перебрать все элементы массива 0: 2 внутри массива 2,3,6,8,10
                //     console.log(`${i}: ${item} внутри массива ${arr}`);                               //1: 3 внутри массива 2,3,6,8,10
                // });         




        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();