'use strict'

var closeButton = document.querySelector('.modal-close');
var modalWindow = document.querySelector('.modal__contact');
var contactButton = document.querySelector('.header__button');

closeButton.addEventListener('click', function(){
    modalWindow.style.display = 'none'
});

window.addEventListener('keydown', function(evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modalWindow.classList('modal-show')){
            // modalWindow.style.display = 'none';
            modalWindow.classList.remove('modal-show');
        }
    }
});




contactButton.addEventListener('click', function(evt){
    evt.preventDefault();

    modalWindow.style.display = 'block'
});



// document.onclick = function(evt){
//     if ( event.target.classList != 'modal__contact') {
//         console.log('privet');
//         // modalWindow.classList.remove('modal-show');
//         modalWindow.style.display = 'none';
//     // } if (event.target === contactButton) {
//     //     modalWindow.classList.add('modal-show');
//     }
// };



// document.onclick = function(e){
//     if ( event.target.length === 0 === modalWindow) {
//         console.log('privet');
//         // modalWindow.style.display = 'none';
//     };
// };

document.onclick = function(e){
    if ( !modalWindow.contains(event.target)) {
        console.log('privet');
        modalWindow.style.display = 'none';
    } if (event.target === contactButton) {
        modalWindow.style.display = 'block';
    }
};

closeButton.addEventListener('click', function(){
    modalWindow.style.display = 'none'
});