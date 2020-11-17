

//Кнопка наверх
(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();


//сортировка
document.querySelector('#price').onclick = function () {
  sortList('data-price');
};
document.querySelector('#age').onclick = function () {
  sortListDesc('data-age');
};

function sortList(sortType) {
  let items = document.querySelector('.main__card');
  for (let i = 0; i < items.children.length - 1; i++) {
      for (let j = i; j < items.children.length; j++) {
          if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
              console.log(1);
              let replacedNode = items.replaceChild(items.children[j], items.children[i]);
              insertAfter(replacedNode, items.children[i]);
          }
      }
  }
}

function sortListDesc(sortType) {
  let items = document.querySelector('.main__card');
  for (let i = 0; i < items.children.length - 1; i++) {
      for (let j = i; j < items.children.length; j++) {
          if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
              console.log(1);
              let replacedNode = items.replaceChild(items.children[j], items.children[i]);
              insertAfter(replacedNode, items.children[i]);
          }
      }
  }
}


function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}



//Избранное
let likeCard = document.querySelectorAll('.card-body__like'),
    favor = document.querySelector('.main__card-favor');

for (let elem of likeCard) {
    elem.addEventListener('click', function()  {
      elem.style.opacity = '1';

      favor.style.display = "block";

      let timerId = setInterval(() => {
        favor.style.display = "none";
      }, 3000);
      
    });  
}

//бургер
let burgerMenu = document.querySelector('.burger');
let menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', function() {
    menu.classList.toggle('show');
});
