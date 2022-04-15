/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

' use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
                         // cykl for!!!!!!!!!!!!!!!!!!!!!!
      for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');  
              
              if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50)  {
                 personalMovieDB.movies[a] = b;
                 console.log('done');
              } else{
                console.log('error');
                i--;
              }

            }

                
                                    // cykl while  hyety sdelal
        
                // const a = prompt('Один из последних просмотренных фильмов?', ''),
                //       b = prompt('На сколько оцените его?', '');
        
                // while (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                //     let i = 0;
                //     if(i < 2) {
                //         personalMovieDB.movies[a] = b;
                //         console.log('done');
                //         i++; 
                //     }  else {
                //         console.log('error');
                //          i-- ;                    
                //  }              
                      
                // }      
                      
            

                     // не switch  потому что не равно 10
             if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count >=10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if(personalMovieDB.count >= 30) { 
            console.log("Вы киноман");
        } else  {  
            console.log("Произошла ошибка");
        }    
     

      console.log(personalMovieDB);   

 
 
 
 
 
 
 
 
 
 
 
  





 
//         switch (numberOfFilms == 10) {
//             case numberOfFilms > 9:
//                 console.log("Просмотрено довольно мало фильмов");
//                 break;
//             case numberOfFilms > 30:
//                 console.log("Вы классический зритель");
//                 break;
//             case numberOfFilms < 30:
//                 console.log("Вы киноман");
//                 break;
//             default:
//                 console.log("Произошла ошибка");
//                 break;
//         }
  
    















    //   for (let i = 1; i < 10; i++) {
    //     if (i === 6) {
    //         break;
    //         continue;
    //     }
        
    //     console.log(i);
         
    // }

    // while  (num <= 55);