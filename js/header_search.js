;(function() { 
    
    let searchIcon = document.querySelector('.header-tools-search img'); 
        searchForm = document.querySelector('.header-search'); 
    
    searchIcon.addEventListener('click', () => {  
        searchForm.classList.add('active')
    });
    window.addEventListener('click', () => { 
        if(event.target != document.querySelector('.header-search input') && event.target != searchIcon) {  
            searchForm.classList.remove('active')
        }
    }) 
   
})();
    
