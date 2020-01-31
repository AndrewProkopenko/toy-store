;(function() { 
        
    let sorting = document.querySelector('#sorting'),
    sortingLarge = document.querySelector('#sorting-large'),
    sortingList = document.querySelector('#sorting-list'); 

    sortingLarge.addEventListener('click', setSortingLarge);
    sortingList.addEventListener('click', setSortingList);

    function setSortingLarge() { 
        sortingLarge.classList.add('active')
        sortingList.classList.remove('active')
        sorting.classList.add('sorting-row');
        sorting.classList.remove('sorting-column');
    }
    function setSortingList() { 
        sortingList.classList.add('active');
        sortingLarge.classList.remove('active');
        sorting.classList.remove('sorting-row');
        sorting.classList.add('sorting-column');
    }

}());