;(function() { 
    
    let searchIcon = document.querySelector('.header-tools-search img'); 
        searchForm = document.querySelector('.header-search'); 
    
    searchIcon.addEventListener('click', () => { 
        console.log(11)
        searchForm.classList.add('active')
    });
    window.addEventListener('click', () => { 
        if(event.target != document.querySelector('.header-search input') && event.target != searchIcon) { 
            console.log(event.target)
            searchForm.classList.remove('active')
        }
    })
    // if( searchForm.classList.contains('active')) { 
    //     console.log(1234)
       
    // }
   
})();
    