const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');  
// btn.onclick = function() {
//     alert('Click');
// };

// btn.addEventListener('click', () => {  //назначаем событие клик на кнопку бтн(событие   колбек функция)
//     alert('Click');
// });
// btn.addEventListener('click', () => {  //назначаем событие клик на кнопку бтн(событие   колбек функция)
//     alert('Second Click');
// });

//let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {    //сработало условие и отключило обработчик событий
    //     btn.removeEventListener('click', deleteElement);//когда нажмут клик кнопка исчезнннет
    // }
};

//btns.addEventListener('click', deleteElement);  //когда нажмут клик кнопка исчезнннет
//overlay.addEventListener('click', deleteElement);  //когда нажмут клик кнопка исчезнннет
  

// btn.addEventListener('click', (e) => {  //элемент события
      // console.log(e.target);
//     e.target.remove();
      //console.log('Hover');
// });

btns.forEach(btn => {                //чтоб только 1 раз на кнопку клик и конэц
    btn.addEventListener('click', deleteElement, {once: true});// назначили обработчик событий сразу на несколько кнопок
});


const link = document.querySelector('a');

link.addEventListener('click', event =>  {
    event.preventDefault();  //браузер стой не выполняй переход по ссылке а делай то что в функции 
    console.log(event.target);

});














































