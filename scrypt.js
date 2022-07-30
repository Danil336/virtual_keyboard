const keyboardKeys = ["\`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","ShiftL","z","x","c","v","b","n","m",",",".","/","ShiftR","CtrlL","Meta","AltL","Space","AltR","CtrlR","🠈","🠉","🠋","🠊","Del"]

// const upperKeysS = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\","CapsLock","A","S","D","F","G","H","J","K","L",";","'","Enter","ShiftL","Z","X","C","V","B","N","M",",",".","/","ShiftR","CtrlL","Meta","AltL","Space","AltR","CtrlR","🠈","🠉","🠋","🠊","Del"]

const specialInputKeys = {'gEnter': '\n', 'gTab': '\t', 'gSpace': ' '}

const keyboard = document.querySelector('.keyboard')

const input = document.querySelector('.input')

keyboardKeys.forEach((elem) => {

    const button = document.createElement('button')
    button.innerText = elem
    button.classList.add('keys', 'g' + elem )
    
    keyboard.append(button)
    button.id = `g${elem}`
})

for(let key of keyboard.children){
    if(!(`g${key.innerText}` in specialInputKeys)){
        key.setAttribute('data-keyname', key.innerText);
    // key.setAttribute('upperCaseName', key.innerText.toUpperCase());
    }
    else{
        key.setAttribute('data-keyname', specialInputKeys[`g${key.innerText}`])
    }
}


// const qq = document.querySelector('.keys');
// qq.classList.add('qq');

// const caps_lock_key = document.querySelector('.gCapsLock')
// const shift_left = document.querySelector('.gShiftL')
// const shift_right = document.querySelector('.gShiftR')
// const spaceKey = document.querySelector('.gSpace')

// const control_left = document.querySelector('.gCtrlL')
// const control_right = document.querySelector('.gCtrlR')
// const alt_left = document.querySelector('.gAltL')
// const alt_right = document.querySelector('.gAltR')


document.addEventListener('keydown', (event) => {
        event.preventDefault()
    })






// document.addEventListener('keydown', e => {
//     for(let i = 0; i < keys.length; i++){
//         if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('upperCaseName')){
//             // console.log(keys[i])
//             keys[i].classList.add('active')
//         }
//         if(e.code == 'Space') {
//             spaceKey.classList.add('active')    	
//         }
//         if(e.code == 'ShiftLeft') {
//             shift_left.classList.add('active')
//         }
//         if(e.code == 'ShiftRight') {
//             shift_right.classList.add('active')
//         }
//         if(e.code == 'ControlLeft') {
//             control_left.classList.add('active')
//         }
//         if(e.code == 'ControlRight') {
//             control_right.classList.add('active')
//         }
//         if(e.code == 'AltLeft') {
//            alt_left.classList.add('active')
//         }
//         if(e.code == 'AltRight') {
//             alt_right.classList.add('active')
//         }
//         if(e.code == 'CapsLock') {
//             caps_lock_key.classList.toggle('active');
//         }   
//     }

// })

// document.addEventListener('keyup', e => {
//     for(let i = 0; i < keys.length; i++){
//         if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('upperCaseName')){
//             keys[i].classList.remove('active')
//             // keys[i].classList.add('remove')
            
//         }
//         if(e.code == 'Space') {
//             spaceKey.classList.remove('active');
//             // spaceKey.classList.add('remove');
//         }
//         if(e.code == 'ShiftLeft') {
//             shift_left.classList.remove('active')
//             // shift_right.classList.remove('remove')
//         }
//         if(e.code == 'ShiftRight') {
//             shift_right.classList.remove('active')
//             // shift_left.classList.remove('remove')
//         }
//         if(e.code == 'ControlLeft') {
//             control_left.classList.remove('active')
//         }
//         if(e.code == 'ControlRight') {
//             control_right.classList.remove('active')
//         }
//         if(e.code == 'AltLeft') {
//             alt_left.classList.remove('active')
//          }
//          if(e.code == 'AltRight') {
//              alt_right.classList.remove('active')
//          }
//     }
//         // setTimeout(() => {
//         //     keys[i].remove('remove')
//         // }, 200)
    

// })






