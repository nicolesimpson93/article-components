// DOCUMENT REFERENCES
let $doc = document.documentElement
let $win = window
let $bar = document.querySelector('.progress-bar')


// EXECUTION

// Listen for the window to scroll
$win.addEventListener('scroll', event => { 
  
  // Height of the window (without scroll bars)
  let winH = $doc.clientHeight 

  // Height of the document (html page)
  let docH = $doc.scrollHeight 

  // if (docH is less than winH), hide the progress-bar
  if (docH <= winH) {
    // "None" the .progress-bar display
    $bar.style.display = 'none'
  } else {
    // "Block" the .progress-bar display
    $bar.style.display = 'block'
  }

  // Determine how much CAN be scrolled
  let canBeScrolled = docH - winH

  // Determine how much HAS been scrolled
  let hasBeenScrolled = $win.scrollY

  // What percentage of the page has been scrolled
  let percentScrolled = hasBeenScrolled / canBeScrolled

  // Convert scrolled % out of 100 and apply to the width of .progress-bar
  $bar.style.width = `${percentScrolled * 100}%`

})
