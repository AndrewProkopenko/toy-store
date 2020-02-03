;(function() { 
    
let productInfo = document.querySelectorAll('.product-info'),
        moreInfo = document.querySelectorAll('.info-more');

let smallImage = document.querySelectorAll('.secondary-img img'), 
    bigImage = document.querySelector('.main-img img'); 

moreInfo.forEach( function(item, i) { 
  moreInfo[i].addEventListener('click', () => { 
    moreInfo[i].style.display = 'none'; 
    productInfo[i].style.height = 'auto'; 
  }) 
});

smallImage.forEach( function(item, i) { 
    smallImage[i].addEventListener('click', () => { 
        bigImage.src = smallImage[i].src;
    })
})

})();
    