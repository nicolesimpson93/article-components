window.addEventListener('scroll', event => {
  
  //
  let winH = window.innerHeight
  let winW = window.innerWidth
  let docH = document.body.scrollHeight
  let docW = document.body.scrollWidth

  //
  let scrY = window.scrollY
  let scrX = window.scrollX

  console.log(winH, winW, docH, docW, scrY, scrX);

})


window.addEventListener('scroll', event => { 
  
  let windowH = document.documentElement.clientHeight
  let windowW = document.documentElement.clientWidth
​
  let documentH = document.documentElement.scrollHeight
  let documentW = document.documentElement.scrollWidth
​
  let scrolledPxY = window.scrollY
  let scrolledPxX = window.scrollX
​
})