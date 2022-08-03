let isEnglish = true
function lang() {
    
    if(isEnglish){
        for(let key in keys){
        keys[key].innerText = ruKeys[key]
        isEnglish = false
            
    }
    
  } else{
    for(let key in keys){
         keys[key].innerText = keyboardKeys[key]
        isEnglish = true
    }
  }
    
}





document.addEventListener('keydown', event => {
    if(event.altKey && event.code === 'ControlLeft'){
       lang()
    }
   
})