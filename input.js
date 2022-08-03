let isShiftActive = false

keyboard.addEventListener('click', event => {
    for(let key of keyboard.children){
        if(key.id.length < 3 && key === event.target){
            input.value += key.innerText
        } else if(`g${key.innerText}` in specialInputKeys && key === event.target){
            input.value += specialInputKeys[`g${key.innerText}`];
        } 
    }
})

document.addEventListener('keydown', event => {

    if(isEnglish){
        if(isShiftActive){
            if(event.code == "Backquote"){
                input.value += '\~'
            }
            if(event.code == "Quote"){
                input.value += '\"'
            }
        }
        else if(event.code == "Backquote"){
            input.value += '\`'
        }
        else if(event.code == "Quote"){
            input.value += '\''
        }
        
    }
    
    if(!isEnglish){
        if(isShiftActive){
            if(event.code == "Backquote"){
                input.value += 'Ё'
            }
            if(event.code == "Quote"){
                input.value += 'Э'
            }
        }
        else if(event.code == "Backquote"){
            input.value += 'ё'
        }
        else if(event.code == "Quote"){
            input.value += 'э'
        }
        
    }
    
    

   
    if(event.code == 'Space'){
        input.value += ' ';
        
    }
    else if(event.key.length < 3){
        if(isShiftActive) {
            console.log(event.key)
            let pressedKey = document.querySelector(`[data-shift-keyname="${event.key.toLowerCase()}"]`)  
            if(!pressedKey === true){
                pressedKey = document.querySelector(`[data-keyname="${event.key.toLowerCase()}"]`) 
            } 
            
            input.value += pressedKey.innerText
            pressedKey.classList.add('active')
           
         
        } else {
            const pressedKey = document.querySelector(`.g${event.key.toLowerCase().charCodeAt(0)}`) ;
            input.value += pressedKey.innerText
            pressedKey.classList.add('active')
           
        }
    } else if(`g${event.key}` in specialInputKeys){
        input.value += specialInputKeys[`g${event.key}`];
        
    }       

})

document.addEventListener('keyup', event => {
    let pressedKey = document.querySelector(`[data-shift-keyname="${event.key.toLowerCase()}"]`)
    if(!pressedKey === true){
        pressedKey = document.querySelector(`[data-keyname="${event.key.toLowerCase()}"]`) 
        
    } 
    console.log(event)
    pressedKey.classList.remove('active')
})

document.addEventListener('keyup', event => {
   
})
document.addEventListener('keyup', event => {

})