# Scroll Progress Indicator

**Goal:** Create a visual progress indicator to show a user how much progress has been made for an


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


## Part 1: Scroll progress indicator
1. Add a `<div>` element with a `.progress-bar` class to the HTML document
   1. Style the element to be `fixed` to the `top`-`left` with a set `height` and a `background-color` of your choice
   2. Test a few `width` value to see how the progress bar might look in
2. Ensure the scrollable part of the document is greater than the height of the window. If not, the progress bar should not be shown to the user at all
- Buffer

### Advanced

#### A) Improved UI
1. Modify the `.progress-bar` to be an outer `<div>` with class `.bar` and an inner `<div>` with class `.progress`
2. The `.bar` should be the full width and have a translucent `background-color` to always be present
   1. When hovered, the bar's `background-color` should become fully opaque
3. The `.progress` should be

#### B) Scalable and Portable
- Write the bar as an Object, create the elements using Javascript

Part 3: Word count


Part 2: Scroll to
- 

Part 4: In view


Part 5: Load new content