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
    if(event.code == 'Space'){
        input.value += ' ';
        
    }
    else if(event.key.length < 3){
        if(isShiftActive) {
            input.value += document.querySelector(`[data-shift-keyname="${event.key}"]`).getAttribute('data-shift-keyname')
        } else {
            const pressedKey = document.querySelector(`.g${event.key.toLowerCase().charCodeAt(0)}`) ;
            input.value += pressedKey.innerText
        }
    } else if(`g${event.key}` in specialInputKeys){
        input.value += specialInputKeys[`g${event.key}`];
    } 

})