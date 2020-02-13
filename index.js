//Document refrences 
let $doc = document.documentElement //htmlelement
let $win = window
let $bar = document.querySelector (`.progress-bar`)

let $doc = document. documentElement //htmlelement 
let $win = window 
let $bar = document. querySelector(`.bar`)
let $prog = document. querySelector(`.progress`)
let $h1 =  document. querySelector('#heading')
let $h1copy = document.querySelector(`.h1copy`)




//STEPS

//Store the textContent from the $h1 
let $h1 = document.textContent('.heading')


//Apply new textContent to the .h1copy
let $h1 = document.textContent(``)

//Apply opacity: 0 to h1copy (decimal number but represents a percentage)
$h1copy.stlye.oppacity = `.5`; 

//Determine when h1 isoff the top of the window 
    //A) Manually scroll, store the window. scrollY
    let hasBeenScrolled = window.scrollY
    //B) Calculate the position with the variables
    let percentageScrolled = hasBeenScrolled / canBeScrolled

//check if scrolled is less than where the bottom of h1 is 

//...else

//Capture the scroll of the window 