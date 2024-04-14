// Introduction to events

// For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box.

// What is an Event:  Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs.

// For example

// 1. The user selects, clicks, or hovers the cursor over a certain element.
// 2. The user chooses a key on the keyboard.
// 3. The user resizes or closes the browser window.
// 4. A web page finishes loading.
// 5. A form is submitted.
// 6. A video is played, paused, or ends.
// 7. An error occurs.

// To react to an event, you attach an event handler to it.
// This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires.

// Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.


// An example: handling a click event

const btn = document.querySelector("#btn");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const color = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.background = color;
});


// Using addEventListener()
// As we saw in the last example, objects that can fire events have an addEventListener() method, and this is the recommended mechanism for adding event handlers.


// the code from the last example
// The HTML <button> element will fire an event when the user clicks the button. So it defines an addEventListener() function, which we are calling here. We're passing in two parameters:

// the string "click", to indicate that we want to listen to the click event. Buttons can fire lots of other events, such as "mouseover" when the user moves their mouse over the button, or "keydown" when the user presses a key and the button is focused.
// a function to call when the event happens. In our case, the function generates a random RGB color and sets the background-color of the page <body> to that color.

const btn2 = document.querySelector("#btn2");

function changecolor(){
    const color = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.background = color;
}

btn2.addEventListener("click", changecolor);

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events