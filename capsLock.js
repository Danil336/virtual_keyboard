const caps = document.querySelector('.gCapsLock')
function capsLock() {
    for(let key of keyboard.children){
        if(key.innerText.length < 3){
            if(key.innerText === key.innerText.toUpperCase()){
                key.innerText = key.innerText.toLowerCase();
            } else{
                key.innerText = key.innerText.toUpperCase();
            }
        }
    }
}
document.addEventListener('keydown', event => {
    if(event.key === 'CapsLock'){
        capsLock()
        caps.classList.toggle('active')
    }
});
document.addEventListener('click', event => {
    if(event.target.innerText === 'CapsLock'){
        capsLock()
        caps.classList.toggle('active') 
    }
});