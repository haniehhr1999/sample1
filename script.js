// for slider ========================================================================
let arrRight = document.querySelector('.mdi-arrow-right')
let arrLeft = document.querySelector('.mdi-arrow-left')
let section = document.querySelector('.bgImg')

let x = 1
let y = 2

arrRight.addEventListener('click' , function(){
    if (x == 0) {
        section.style.backgroundImage = "url(assets/m1.webp)"
        x = 1
    }
    else if (x == 1) {
        section.style.backgroundImage = "url(assets/m2.webp)"
        x = 2
    }
    else if (x == 2) {
        section.style.backgroundImage = "url(assets/m3.webp)"
        x = 0
    }
})

arrLeft.addEventListener('click' , function(){
    if (y == 0) {
        section.style.backgroundImage = "url(assets/m1.webp)"
        y = 2
    }
    else if (y == 1) {
        section.style.backgroundImage = "url(assets/m2.webp)"
        y = 0
    }
    else if (y == 2) {
        section.style.backgroundImage = "url(assets/m3.webp)"
        y = 1
    }
})