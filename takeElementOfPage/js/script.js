' use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');



//console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {                 //Над несколькими элеменнтами произвести одни и те же действия
//     hearts[i].style.backgroundColor = 'green';             // querySelectorAll  только с этим методом будет работать
// }

// Специальные перебирающие методы
hearts.forEach(item => { // второй аргумент в методе forEach это номер по порядку а третий этоссылка на тот массив кот мы перебираем
    item.style.backgroundColor = 'blue';
});

//Верстка сайта с помощью js
const div = document.createElement('div'); //такая команда сохраняет div только внутри js scripta
const text = document.createTextNode('Тут был я'); //элементы без оболочки тега
//div.classList.add('black'); //застилизовать элемент



wrapper.append(div);

//div.textContent = "Hello";  //работает только с текстом а не с структурой HTML
div.innerHTML = "<h1>Hello World</h1>";
div.insertAdjacentHTML('afterend', '<h2>Hoppapa!!</h2>'); //вставить кусок кода HTML


//document.body.append(div);  //берем тег body и добавляем div в его в самый конец with append
//wrapper.appendChild(div);  //вставляет в конец родительского какой то элемент appendChild(устаревшее)

//wrapper.prepend(div);  //вставляет в начало родительского какой то элемент ..prepend

//hearts[1].before(div);
//hearts[1].after(div);  вставляет элемент перед или после
//wrapper.insertBefore(div, hearts[1]);  //устаревшее. перед каким и какой нужно вставить

//circles[1].remove();  //удаляет укказанный элемент
//wrapper.removeChild(hearts[1]); //устаревшее

 hearts[0].replaceWith(circles[0]);  //заменить элемент
//wrapper.replaceChild(circles[0], hearts[0]);  //устаревшее