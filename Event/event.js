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

btn.addEventListener("click", (e) => {   
    console.log(e);
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

// Removing listeners: 
// If you've added an event handler using addEventListener(), you can remove it again using the removeEventListener() method. 


// For example, this would remove the changeBackground() event handler:

// btn2.removeEventListener("click", changecolor);
// myElement.removeEventListener("event", functionA)


// Adding multiple listerners for a single event
// myElement.addEventListener("event", functionA);
// myElement.addEventListener("event", functionB);

// myElement.onclick =  functionA;
// myElement.onclick = functionB;



// Event handler properties
// Objects (such as buttons) that can fire events also usually have properties whose name is on followed by the name of the event.

// For example, elements have a property onclick. This is called an event handler property.

const btn3 = document.querySelector("#btn3"); 

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

btn3.onclick = () => {  
    const color = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = color;
}


// You can also set the handler property to a named function:
const btn4 = document.querySelector("#btn4"); 
btn4.onclick = changecolor;  



// Inline event handler ---- don't use these
function backgrounColor(){
    changecolor();
}

// const allbtn = document.querySelectorAll("button");
// console.log(allbtn);

// for(const btn of allbtn){
//     btn.addEventListener("click", changecolor);
// }


// Event Object
// Sometimes, inside an event handler function, you'll see a parameter specified with a name such as event, evt, or e.

// This is called the event object, and it is automatically passed to event handlers to provide extra features and information.

const btn5 = document.querySelector("#btn5");

btn5.addEventListener("click", (e) => {
    const color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgrounColor = color;
    console.log(e);
});

// Here you can see we are including an event object, e, in the function, and in the function setting a background color style on e.target — which is the button itself. The target property of the event object is always a reference to the element the event occurred upon. So, in this example, we are setting a random background color on the button, not the page.


// Extra properties of event object
// Most event objects have a standard set of properties and methods available on the event object
// For example, the keydown event fires when the user presses a key

const inputBox = document.querySelector("#textbox");
const output = document.querySelector("#output");

inputBox.addEventListener("keydown", (e)  => {
    output.innerHTML = `You pressed ${e.key}`;
});



// Preventing default behavior
// The most common example is that of a web form, for example, a custom registration form. When you fill in the details and click the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page of some kind (or the same page, if another is not specified).

// The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right.

// Example

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const form = document.querySelector("form");
const para = document.querySelector("#para");

form.addEventListener("submit", (e) => {
    if(fname.value === "" || lname.value === ""){
        e.preventDefault();
        para.textContent = "You need to fill in both names"
    }
});


// Now some JavaScript — here we implement a very simple check inside a handler for the submit event (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty. 

// If they are, we call the preventDefault() function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong:

// video player example
const videoBtn = document.querySelector(".vider_player");
const hidden = document.querySelector(".hidden");
const video = document.querySelector(".play");

// videoBtn.addEventListener("click", () => {
//     hidden.classList.remove("hidden");
// });

// video.addEventListener("click" , () =>{
//     video.play();
// });

// hidden.addEventListener("click", () =>{
//     hidden.classList.add("hidden");
// });

// The video is inside the <div> — it is part of it — so clicking the video runs both the event handlers, causing this behavior.

// Fixing the problem with stopPropagation()
// As we saw in the last section, event bubbling can sometimes create problems, but there is a way to prevent it. The Event object has a function available on it called stopPropagation() which, when called inside an event handler, prevents the event from bubbling up to any other elements.

videoBtn.addEventListener("click", () => {
    hidden.classList.remove("hidden");
});

video.addEventListener("click" , (e) =>{
    e.stopPropagation();
    video.play();
});

hidden.addEventListener("click", () =>{
    hidden.classList.add("hidden");
});

// All we're doing here is calling stopPropagation() on the event object in the handler for the <video> element's 'click' event. This will stop that event from bubbling up to the box.


// Event delegation
// Example
function randomD(number){
    return Math.floor(Math.random() * (number + 1));
}

function tilesColor(){
    const bgcolor = `rgb(${randomD(255)} ${randomD(255)} ${randomD(255)})`;
    return bgcolor;
}

const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
    event.target.style.backgroundColor = tilesColor();
});

// Note: In this example, we're using event.target to get the element that was the target of the event (that is, the innermost element). If we wanted to access the element that handled this event (in this case the container) we could use event.currentTarget.





// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events 
// https://www.codeguage.com/courses/js/events-event-objects