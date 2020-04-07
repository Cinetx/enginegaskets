'use strict'

var closeButton = document.querySelector('.modal-close');
var modalWindow = document.querySelector('.modal__contact');
var contactButton = document.querySelector('.header__button');

window.addEventListener('keydown', function(evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modalWindow.classList('modal-show')){
            // modalWindow.style.display = 'none';
            modalWindow.classList.remove('modal-show');
        }
    }
});
document.onclick = function(e){
    if ( !modalWindow.contains(event.target)) {
        modalWindow.style.display = 'none';
    } if (event.target === contactButton) {
        modalWindow.style.display = 'block';
    }
};
closeButton.addEventListener('click', function(){
    modalWindow.style.display = 'none'
});
