function capsLock() {
  for(let key of keyboard.children) {
  if (key.innerText.length < 3) {
    if(key.innerText === key.innerText.toUpperCase()) {
      key.innerText = key.innerText.toLowerCase();
    } else {
      key.innerText = key.innerText.toUpperCase();
    }
   }
 }
}
document.addEventListener('keydown',(event) => {
  console.log(event.key)
  if(event.key === 'CapsLock') {
    capsLock()
  }
});
document.addEventListener('click', (event) => {
  console.log(event.target);
  if(event.target.innerText === 'CapsLock') {
    capsLock()
  }
});