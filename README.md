# Article Components

## Capturing values

Here are some of the values needed to begin solving the challenges below.

### Scroll position

```javascript
window.addEventListener('scroll', event => { 

  // Pixels scrolled after the scroll event was triggered
  let scrolledPxY = window.scrollY  // pixels scrolled vertically
  let scrolledPxX = window.scrollX  // pixels scrolled horizontally

})
```

### Element dimensions (including the `window`)

```javascript
let $doc = document.documentElement  // Select the <html> element (the bigger wrapper there is)

// DIMENSIONS

// Window, including scrolls bars (window's outside perimeter)
let windowHsc = window.innerHeight  // window height (px)
let windowWsc = window.innerWidth  // window width (px) 

// Window, not including scrolls bars (inside of the scroll bars)
let windowH = $doc.clientHeight  // window height (px)
let windowW = $doc.clientWidth  // window width (px)
// ** this is weird one! it's obtaining the windows true inner dimensions via the documentElement

// Dimensions of any element (including content and padding, but not border or margin)
let documentH = $doc.scrollHeight
let documentW = $doc.scrollWidth
```


## Part 1: Scroll progress indicator

**Goal:** Create a visual progress indicator to show a user how much progress has been made for a given article.

### Getting Started

1. Add a `<div>` element with a `.progress-bar` class to the HTML document to build the component UI
   1. Style the element to be `fixed` to the `top` & `left` with a specified `height` (ie, not `auto`) and a `background-color` of your choice
   2. Test a few `width` value to see how the progress bar might behave and as a way to prototype the UI behaviour for the solution
2. `if` the `document`'s `height` is less than the height of the window, the progress bar should not be on `display` at all (because no scrolling will be possible)
3. *Listen* for the `window`'s `scroll` Event, then calculate the percentage that the `window` has scrolled at that point, relative to the total possible amount that can possibly be scrolled
   1. Translate that computed value (a percentage) to the `width` of the `.progress-bar`

### Advanced

1. Modify the `.progress-bar` HTML to create an outer `<div>` with class `.bar` and an inner `<div>` with class `.progress`
   1. `.bar` should remain `fixed` as before
   2. `.progress` can be `absolute` or remain `static` (but should not be `fixed`) to stay within its `.bar` parent
   3. The `.bar` should be the full width of the window and have a translucent `background-color` to always be present, but not block content below it
   4. When the `.bar` is in the `:hover` state, the bar's `background-color` should become fully opaque
   5. The scroll-progress percentage should now be applied to the `.progress` element to grow its `width` within the parent `.bar`
2. Prototype a solution using HTML/CSS where a copy of the `textContent` from the article's `<h1>` is copied into the `bar` so the user knows that the name of the article that the progress is tracking
   1. Create a new `<div>` element and apply a style that allows it to sit in the `.bar` above the `.progress` (making it `absolute` makes it easy to layer the `position`)
   2. Using JavaScript, copy the `textContent` into that new element when the `window` has triggered a `load` event (the window has been loaded)
   3. Apply `opacity: 0` to the new heading and fade it back in only `if` the window has scrolled enough `px` such that the actual `<h1>` is no longer within view of the document
      1. Try capturing the total height of the element using JavaScript
      2. Even more impressive, look for a property of the `<h1>` that would indicate where it is relative to the top of the document and use that to determine where the bottom of the element would be relative to the scroll position
   4. Using the same condition statement, check if the `<h1>` is (back into) view; if so, fade out the heading copy element again
3. To turn this into a practical plugin component that can be added to any page, the HTML (and ideally even the CSS) must be created exclusively with Javascript. 
   1. Use `createElement()` and `appendChild()` to dynamically create the `div`, assign it its appropriate `className` and any necessary `innerHTML` for the sub elements

## Part 2: Word count

Coming soon.

## Part 3: Scroll to

Coming soon.

## Part 4: In view

Coming soon.

## Part 5: Load new content

Coming soon.
