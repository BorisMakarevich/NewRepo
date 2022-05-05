/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

' use strict';

document.addEventListener('DOMContentLoaded', () => {

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
        moviesList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => { //обработчик события сабмит(отправить)
        event.preventDefault(); //отменяем стандартное поведение браузера перезагружать страницу

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {  //воспринимает как фолз если пустой инпут и как тру если что то в инпут записали
              
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;  //обрезали символы ввода инпут до 21 and ...
            }
            
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }


            movieDB.movies.push(newFilm); //запуливаем новые фильмы из инпута в мувис 
               sortArr(movieDB.movies);
                createMovieList(movieDB.movies, moviesList);
        }

        // addForm.reset();  //сбросить данные формы после использования
        event.target.reset(); //сбросить данные формы после использования

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => { //  item => функция будет перебирать все картинки элементы по очереди
            item.remove(); // а вот сдесь уже указываем что делать с каждой картинкой
        });
    };



    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };



    const sortArr = (arr) => {
        arr.sort(); //сортирует по алфавиту элементы массива
    };



    // console.log(poster.innerHTML);  // просмотреть что лежит в poster  Позволяет получать элементы со страницы

    function createMovieList(films, parent) {
        parent.innerHTML = ""; //  очистили блок movieList
        sortArr(films);

        films.forEach((film, i) => { // +=   дополнительное присваивание a = a + 1;  a += 1;
            parent.innerHTML += `                  
            <li class="promo__interactive-item">${i + 1} ${film}  
                <div class="delete"></div>                    
            </li> 
            `; // интерполяция выполняется с помощью {{}} с помощью услуги интерполяции $.                        
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);  // сплайс метод вырезает опр элмент из массива(номер элм    сколько элм удалить)
                createMovieList(films, parent);
            
            });

        });
    }    

     

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, moviesList);
    

});