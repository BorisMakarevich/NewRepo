//console.log(document.head);
//console.log(document.documentElement);  //то что внутри HTML   tega
//console.log(document.body.childNodes);  //узлы которые являються детьми у боди
// console.log(document.body.firstChild);
//console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

//console.log(document.querySelector('#current').parentNode );  //нашли узел родителя по ребенку
//console.log(document.querySelector('#current').parentNode.parentElement);  //нашли элемент родителя по ребенку

// console.log(document.querySelector('[data-current="3"]').nextSibling);  //получить вытянуть атрибут, после соседний узел
// console.log(document.querySelector('[data-current="3"]').previousSibling);  //получить вытянуть атрибут, потом предидущий узел


//console.log(document.querySelector('[data-current="3"]').nextElementSibling); //именно следующий элемент получаем а не узел


for (let node of document.body.childNodes) {  //поиск всех дочерних именно элементов не узлов
    if (node.nodeName == '#text') {
       continue; 
    }

    console.log(node);

}










































