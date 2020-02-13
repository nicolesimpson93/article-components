//Document refrences 
let $doc = document.documentElement //htmlelement
let $win = window
let $bar = document.querySelector (`.progress-bar`)


//Steps 
//Height of the window 
let winH = $doc.clientHeight

//Height of the document 
let docH = $doc.scrollHeight

//Make  .progress- bar not displayed
$bar.stlye.display = `none`

//Make .progress- bar displayed
$bar.stlye.display = `block`

//If the $doc height < $win height...
if (docH <= winH){ console.log(No progress bar needed)}
else{ console.log(`Put a progress bar`)}

//Store hwo much HAS been scrolled 
let hasBeenScrolled = window.scrollY

//Store how much CAN be scrolled
let canBeScrolled = docH - winH

//Calculater the  % scrolled of avilable 
let percentageScrolled = hasBeenScrolled / canBeScrolled

//Apply a % of the $bar width 
$bar.style.width = `${percentageScrolled * 100}%`
//Capture the scroll of the window
$win .addEventListener (`scroll`, event => { 

//Height of the window 
let winH = $doc.clientHeight

//Height of the document 
let docH = $doc.scrollHeight

//Store hwo much HAS been scrolled 
let hasBeenScrolled = window.scrollY

//Store how much CAN be scrolled
let canBeScrolled = docH - winH

//Calculater the  % scrolled of avilable 
let percentageScrolled = hasBeenScrolled / canBeScrolled

//Apply a % of the $bar width 
$bar.style.width = `${percentageScrolled * 100}%`
}