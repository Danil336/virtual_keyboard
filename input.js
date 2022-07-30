


keyboard.addEventListener('click', event => {
    console.log(event.target.getAttribute('data-keyname').length)
    for(let key of keyboard.children){
        if(key.getAttribute('data-keyname').length < 3 && key == event.target){
            input.value += key.getAttribute('data-keyname')

        }

    }
})

document.addEventListener('keydown', event => {
    if(event.code == 'Space'){
        input.value += ' '
    }
    else if(event.key.length < 3){
    const pressedKey = document.querySelector(`.g${event.key}`)

    
    
      
    input.value += pressedKey.getAttribute('data-keyname')

    console.log(event.code)
    // console.log(`g${event.key}`)
}
})