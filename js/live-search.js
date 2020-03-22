'use strict'

let searchBar = document.getElementById('search-bar');


searchBar.addEventListener('keyup', function(){
    let searchElements, productBlock, i;
    searchElements = searchBar.value.toUpperCase();
    console.log(searchElements);

    productBlock =  document.querySelectorAll('.catalog__wrapper');

    for (i = 0; i < productBlock.length; i++){
        let productName = productBlock[i].querySelectorAll('.catalog__content__name')[0];
        if(productName.innerHTML.toUpperCase().indexOf(searchElements)> -1){
            productBlock[i].style.display = '';
        } else {
            productBlock[i].style.display = 'none'
        }
    }
});

