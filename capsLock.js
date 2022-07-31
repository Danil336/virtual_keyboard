const caps = document.querySelector('.gCapsLock')
let isCaps = false;
function capsLock() {
    isCaps = true;
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
    if(event.key === 'CapsLock' && !isCaps === true){
        capsLock();
        caps.classList.toggle('active');
    }
});
document.addEventListener('keyup', event => {
    if(event.key === 'CapsLock'){
        isCaps = false;
    }
});

document.addEventListener('click', event => {
    if(event.target.innerText === 'CapsLock'){
        capsLock();
        caps.classList.toggle('active');
    }
});