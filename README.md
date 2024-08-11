# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
- Desktop solution preview:

![Desktop solution preview:](./design/faq%20page%20solution%20desktop%20view.png)

- Mobile solution preview:

![Mobile solution preview:](./design/faq%20page%20solution%20mobile%20view.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript


### What I learned

```js
document.querySelectorAll(".question")[0].addEventListener("keypress", function(event) {
    var ans = document.querySelectorAll(".answer")[0];
    if (event.keyCode == 13 || 32) {
        showAns1();
    } else {
        ans.style.display = "none";
    }
})
```

### Useful resources

- [addEventListener() method](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) - This article helped me for understanding how to add events like mouse click and keyboard presses.

## Author

- Frontend Mentor - [@Vignesh470](https://www.frontendmentor.io/profile/Vignesh470)
- Twitter - [@vignesh470](https://www.twitter.com/vignesh470)
