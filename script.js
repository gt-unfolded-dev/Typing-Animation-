const span = document.querySelector('.text')

const words = ['Developer.', 'Learner.', 'Coder.','Student']

let wordIndex = 0
let charIndex = 0
let isDeleting = false

const typingDelay = 120
const earseDelay = 60
const pauseDelay = 1000

function type(){
    const currentWord = words[wordIndex]
    if(!isDeleting){
        span.innerText += currentWord[charIndex]
        charIndex++;
        if(charIndex == currentWord.length){
            isDeleting = true
            setTimeout(type, pauseDelay)
        } else {
            setTimeout(type, typingDelay)
        }
    } else {
        span.innerText = currentWord.slice(0, charIndex - 1)
        charIndex--
        if(charIndex == 0){
            isDeleting = false
            wordIndex == words.length - 1 ? wordIndex = 0 : wordIndex++
            setTimeout(type, typingDelay)
        } else {
            setTimeout(type, earseDelay)
        }
    }
}

type()