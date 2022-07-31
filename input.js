


keyboard.addEventListener('click', event => {
    for(let key of keyboard.children){
        if(key.getAttribute('data-keyname').length < 3 && key == event.target){
            input.value += key.innerText

        }

    }
})

document.addEventListener('keydown', event => {
    if(event.code == 'Space'){
        input.value += ' ';
        
    }
    else if(event.key.length < 3){
    const pressedKey = document.querySelector(`.g${event.key.toLowerCase().charCodeAt(0)}`);

    input.value += pressedKey.innerText

    console.log(event.code)
    } else if(`g${event.key}` in specialInputKeys){
        input.value += specialInputKeys[`g${event.key}`];
    } 

})