function capsLock() {
    for(let key of keyboard.children){
        if(key.innerText.length < 3){
            if(key.innerText === getComputedStyle.innerText.toUpperCase()){
                key.innerText = key.innerText.toLowerCase()
            } else{
                key.innerText = key.innerText.toUpperCase()
            }
        }
    }
}
document.addEventListener('keydown', event => {
    if(event.target.innerText === 'CapsLock'){
        capsLock()
    }
})
document.addEventListener('click', event => {
    if(event.target.innerText === 'CapsLock'){
        capsLock()
    }
})