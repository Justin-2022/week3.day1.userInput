# week3.day1.userInput

Justin, Arjun, Aidan, and Yosef

## Instructions
1. Fork and clone this repo: [week3.day1.userInput](https://github.com/AllStarCodeOrg/week3.day1.userInput)
2. Do NOT alter the HTML or CSS and do not use an outside library.
3. Using what you know about the DOM and JavaScript, modify the website in the following ways:
   - WHILE typing in the `#title_input` field, the `#main_title` is updated
     - *Hint: try key events*
   - When the user clicks on the `#submit_button` Button:
     - If the user has any field left blank, send an `alert()` informing the user to “Please fill in all fields”
     - If the user has all fields filled out:
       - Parse the inputs into the following “Ad Lib” text, putting the corresponding inputs in the appropriate spots: “Last night I ate a {`#noun`}, and today I just had to {`#verb`}. What a {`#adjective`} day!”
       - Hide the `.form_container`
       - Populate `#story_result` with the finalized text
     - *Tip: Remember to [`.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) or else the button will attempt to submit the form, refreshing the page*

## Extra Credit
- Customize the Ad Lib text and include additional input fields.
- Instead of making the `.form_container` disappear suddenly, have it fade out slowly over .5 second
   - *Note: you do not need to use an outside library to do this.*
   - Once you have it working...try using jQuery to accomplish the same thing!
   - jQuery is a library that makes document traversal, manipulation, and event handling easier for developers. Ask your instructional team how to set this up properly!
     - [jQuery CDN](https://code.jquery.com/jquery-3.3.1.js)
     - [jQuery Documentation](https://api.jquery.com/)

## Helpful Resources
- [Using String Interpolation](https://medium.com/@SunnyB/switching-to-es6-part-2-string-interpolation-and-template-literals-2f1b0ee56740)
- [Checking Input’s value](https://www.w3schools.com/jsref/prop_text_value.asp)
- [Secret Website](https://2018-asc-secret.glitch.me/)
