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
1. Add a `<div>` element with a `.progress-bar` class to the HTML document to build the component UI
   1. Style the element to be `fixed` to the `top` & `left` with a specified `height` (ie, not `auto`) and a `background-color` of your choice
   2. Test a few `width` value to see how the progress bar might behave and as a way to prototype the UI behaviour for the solution
2. If the document's height is not greater than the height of the window, the progress bar should not be shown to the user at all (because no scrolling will be possible)
3. Calculate the percentage that the `window` has scrolled relative to the total possible amount that can scrolled. Translate that value to the `width` of the `.progress-bar`.

### Advanced

1. Modify the `.progress-bar` to be an outer `<div>` with class `.bar` and an inner `<div>` with class `.progress`
   1. `.bar` should still be `fixed` as before
   2. `.progress` can be `absolute` or remain `static` (but should not be `fixed`)
   3. The `.bar` should be the full width of the window and have a translucent `background-color` to always be present
   4. When the `.bar` is in the `:hover` state, the bar's `background-color` should become fully opaque
   5. The progress value should then be applied to the `.progress` element to grow its `width` within the parent `.bar`
2. Prototype a solution using HTML/CSS where a copy of the `textContent` from the article's `<h1>` is positioned within the `bar` (`absolute`, probably) so the user knows that the progress is specifically being made to this article (and so the heading is always present on the page)
   1. Using Javascript, copy the `textContent` into that element when the `window` has triggered a `load` event (the window has been loaded)
   2. Give the element `opacity: 0` and fade it back in only once the window has scrolled enough such that the actual `<h1>` is no longer within view of the document
   3. If the heading comes back into view at some point, fade out the element again
3. To turn this into a practical plugin component that can be added to any page, the HTML (and ideally even the CSS) must be created exclusively with Javascript. Use `createElement()` and `appendChild()` to dynamically create the `div`, assign it its appropriate `className` and any necessary `innerHTML`.

Part 3: Word count


Part 2: Scroll to
- 

Part 4: In view


Part 5: Load new content