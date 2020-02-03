

  let mainTitle = document.querySelector('.main-title');
  let mainTitleContainer = document.querySelector('.main-title-container');
  let fs = 30;  

  function setFontSize() {  
    
  if( mainTitle.offsetWidth < mainTitleContainer.offsetWidth ) { 
      while( mainTitle.offsetWidth < mainTitleContainer.offsetWidth ) { 
        console.log(2)
        fs++; 
        mainTitle.style.fontSize = fs + 'px';
        mainTitle.style.lineHeight = fs - 20  + 'px';
      }
  } else { 
      while( mainTitle.offsetWidth > mainTitleContainer.offsetWidth -20 ) { 
        console.log(1)
        fs--; 
        mainTitle.style.fontSize = fs + 'px';
        mainTitle.style.lineHeight = fs - 20  + 'px';
      }
    }  
      
  }  

  setFontSize()
  // window.addEventListener('resize', setFontSize);
  // window.addEventListener('load', setFontSize);

  




