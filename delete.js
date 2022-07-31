document.addEventListener('click', (event) => {
  if(event.target.innerText === 'Del') {
    let selectionStart = input.selectionStart;
    console.log(selectionStart)
      input.value = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionStart + 1);
      input.selectionStart = selectionStart;
      input.selectionEnd = selectionStart;
      console.log(selectionStart, input.selectionStart)
  }
})
document.addEventListener('click', (event) => {
  if(event.target.innerText === 'Backspace') {
    let selectionStart = input.selectionStart
    if(input.selectionStart != 0) {
      input.value = input.value.slice(0,selectionStart-1)   + input.value.slice(selectionStart)
    } else {
      input.value = input.value.slice(0,selectionStart-1)
    }
    input.selectionStart = selectionStart-1
    input.selectionEnd = selectionStart-1
  }
})
document.addEventListener('keydown', (event) => {
  if(event.key === 'Backspace') {
    let selectionStart = input.selectionStart
    if(input.selectionStart != 0) {
      input.value = input.value.slice(0,selectionStart-1)   + input.value.slice(selectionStart)
    } else {
      input.value = input.value.slice(0,selectionStart-1)
    }
    input.selectionStart = selectionStart-1
    input.selectionEnd = selectionStart-1
  }
})
document.addEventListener('keydown', (event) => {
  if(event.key === 'Delete') {
    let selectionStart = input.selectionStart;
    console.log(selectionStart)
      input.value = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionStart + 1);
      input.selectionStart = selectionStart;
      input.selectionEnd = selectionStart;
      console.log(selectionStart, input.selectionStart)
  }
})