let isShiftActive = false
function toShift (boolean, attribute) {
    isShiftActive = boolean;
    for(let key of keyboard.children) {
      if (key.innerText.length < 3) {
        if (key.innerText === key.innerText.toUpperCase()) {
          key.innerText = key.getAttribute(attribute);
          key.innerText =  key.innerText.toLowerCase();
        } else {
          key.innerText = key.getAttribute(attribute)
          key.innerText =  key.innerText.toUpperCase();
        }
      }
    
  }
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Shift' && !isShiftActive === !false) {
    toShift(true, 'data-shift-keyname')
  }
});
document.addEventListener('keyup', () => {
  if (event.key === 'Shift') {
    toShift(false, 'data-keyname')
    
  }
  

});

