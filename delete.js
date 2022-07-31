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