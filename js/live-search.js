'use strict'

let searchBar = document.getElementById('search-bar');


searchBar.addEventListener('keyup', function(){
    let searchElements, productBlock, i;
    searchElements = searchBar.value.toUpperCase();

    productBlock =  document.querySelectorAll('.catalog__show');

    for (i = 0; i < productBlock.length; i++){
        let productName = productBlock[i].querySelectorAll('.catalog__content__name')[0];
        if(productName.innerHTML.toUpperCase().indexOf(searchElements)> -1){ 
            // productBlock[i].classList.remove('catalog__hidden')
            // productBlock[i].classList.add('catalog__vissible')
            productBlock[i].style.display = ''
        } else {
            // productBlock[i].classList.add('catalog__hidden')
            // productBlock[i].classList.remove('catalog__vissible')
            productBlock[i].style.display = 'none'
        }
    }
    
});

