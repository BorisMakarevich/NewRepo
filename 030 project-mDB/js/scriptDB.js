/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

' use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    moviesList = document.querySelector('.promo__interactive-list');

adv.forEach(item => { //  item => функция будет перебирать все картинки элементы по очереди
    item.remove(); // а вот сдесь уже указываем что делать с каждой картинкой
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

moviesList.innerHTML = ""; //  очистили блок movieList

movieDB.movies.sort(); //сортирует по алфавиту элементы массива

// console.log(poster.innerHTML);  // просмотреть что лежит в poster  Позволяет получать элементы со страницы


movieDB.movies.forEach((film, i) => {                 // +=   дополнительное присваивание a = a + 1;  a += 1;
    moviesList.innerHTML += `                  
        <li class="promo__interactive-item">${i + 1} ${film}  
            <div class="delete"></div>                    
        </li>                    
    `;   // интерполяция выполняется с помощью {{}} с помощью услуги интерполяции $.                        
});