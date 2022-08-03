const keyboardKeys = ["\`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","ShiftL","z","x","c","v","b","n","m",",",".","/","ShiftR","CtrlL","Meta","AltL","Space","AltR","CtrlR","🠈","🠉","🠋","🠊","Del"]
const shiftKeys = ["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","{","}","|","CapsLock","a","s","d","f","g","h","j","k","l",":",'"',"Enter","ShiftL","z","x","c","v","b","n","m","<",">","?","ShiftR","CtrlL","Meta","AltL","Space","AltR","CtrlR","🠈","🠉","🠋","🠊","Del"]
const ruKeys = ["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","ShiftL","я","ч","с","м","и","т","ь","б","ю",".","ShiftR","CtrlL","Meta","AltL","Space","AltR","CtrlR","🠈","🠉","🠋","🠊","Del"]
const ruShiftKeys = ["ё","!","\"","№",";","%",":","?","*","(",")","_","+","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","ShiftL","я","ч","с","м","и","т","ь","б","ю",",","ShiftR","CtrlL","Meta","AltL","Space","AltR","CtrlR","🠈","🠉","🠋","🠊","Del"]
const specialInputKeys = {'gEnter': '\n', 'gTab': '\t', 'gSpace': ' '}

const keyboard = document.querySelector('.keyboard')
const keys = keyboard.children
const input = document.querySelector('.input')

keyboardKeys.forEach((elem) => {

    const button = document.createElement('button')
    button.innerText = elem
    if(elem.length < 3){
        button.classList.add('keys', 'g' + elem.charCodeAt(0) )   
    } else{
        button.classList.add('keys', 'g' + elem)
    }

    keyboard.append(button)
    button.id = `g${elem}`

})

for(const key in keys){
    if(!(`g${keys[key].innerText}` in specialInputKeys)){
        keys[key].setAttribute('data-keyname', keys[key].innerText);
        keys[key].setAttribute('data-shift-keyname', shiftKeys[key])
        keys[key].setAttribute('data-lang', ruKeys[key])
        keys[key].setAttribute('data-shift-lang', ruShiftKeys[key])
    }
    else{
        keys[key].setAttribute('data-keyname', specialInputKeys[`g${keys[key].innerText}`])
    }
}



// document.addEventListener('keydown', event => {
//     for(const key in keys){

//             keys[key].classList.add('active')
        
//     }
// })

document.addEventListener('keyup', (event) => {
        event.preventDefault()
})





