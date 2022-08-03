function toShift(boolean, attribute) {
    isShiftActive = boolean;

    for(let key of keyboard.children){
        if(key.innerText.length < 3){
            if(key.innerText === key.innerText.toUpperCase()) {
                key.innerText = key.getAttribute(attribute)
                key.innerText = key.innerText.toLowerCase()
            } else{
                key.innerText = key.getAttribute(attribute)
                key.innerText = key.innerText.toUpperCase()
            }
        }


    }
}


document.addEventListener('keydown', event => {
    if(event.key === 'Shift' && !isShiftActive === true && isEnglish === false){
        toShift(true, 'data-shift-lang')
    }
})
document.addEventListener('keyup', event => {
    if(event.key === 'Shift' && isEnglish === false){
        toShift(false, 'data-lang')
    }
})
document.addEventListener('mousedown', (event) => {
    if((event.target.innerText === 'ShiftR' || event.target.innerText === 'ShiftL') && !isShiftActive === !false && isEnglish === false){
        toShift(true, 'data-shift-lang')
    }
});

document.addEventListener('mouseup', (event) => {
    console.log(!isShiftActive === true);
    if(event.target.innerText === 'ShiftR' || event.target.innerText === 'ShiftL' && isEnglish === false){
        toShift(false, 'data-lang');
    }
})
