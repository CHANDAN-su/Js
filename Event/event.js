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

// const container = document.querySelector(".container");

// container.addEventListener("click" , (event) => {
//     event.target.style.backgroundColor = tilesColor();
// });

// Note: In this example, we're using event.target to get the element that was the target of the event (that is, the innermost element). If we wanted to access the element that handled this event (in this case the container) we could use event.currentTarget.



// Mouse event in javascript

// onclick: A user clicks on an element

// Description: The onclick event occurs when the user clicks on an HTML element.

const clickEvent = document.querySelector('.click_event')

clickEvent.addEventListener("click", (event) => {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "green";
});

// oncontextmenu: A user right-clicks on an element

// Description: The oncontextmenu event occurs when the user right-clicks an HTML element to open the context menu.
// disable use this method preventDefault()
const body = document.querySelector("body");

body.addEventListener("contextmenu", (e) => {
    // console.log("Open contextmenu!!!");
    e.preventDefault();
});

// ondblclick: A user double-clicks on an element

// Description: The ondblclick event occurs when the user double-clicks on an HTML element.

const dblclick = document.querySelector(".dblclick_event");

dblclick.addEventListener("dblclick", () => { 
    document.body.style.backgroundColor = "green";
    document.body.style.color = "red";
});



// onmousedown: A mouse button is pressed over an element
// Description: The onmousedown event occurs when a user presses a mouse button over an HTML element.

// onmouseup: A mouse button is released over an element
// Description: The onmouseup event occurs when a mouse button is released over an element.

// Events order for the left and middle mouse button:

// 1. onmousedown
// 2. onmouseup
// 3. onclick

// Events order for the right mouse button:

// 1. onmousedown
// 2. onmouseup
// 3. oncontextmenu


// Example: 

const mouse = document.querySelector(".mousedown_mouseup");

mouse.addEventListener("mousedown", () => {
    mouse.style.color = "red";
});

mouse.addEventListener("mouseup", () =>{
    mouse.style.color = "yellow";
});



// onmouseenter: The mouse pointer moves into an element

// Decription: The onmouseenter event occurs when the mouse pointer enters an element. The onmouseenter event is often used together with the onmouseleave event, which occurs when the mouse pointer leaves an element.


// onmouseleave: The mouse pointer moves out of an element

// Decriptipn: The onmouseleave event occurs when the mouse pointer leaves an element. The onmouseleave event is often used together with the onmouseenter event, which occurs when the mouse pointer enters an element.


// Example:

const mouseenter_leave = document.querySelector(".mouseenter_mouseleave");

console.log(mouseenter_leave);

mouseenter_leave.addEventListener("mouseenter", () => {
    mouseenter_leave.style.width = "80px";
    mouseenter_leave.style.height = "80px";
});

mouseenter_leave.addEventListener("mouseleave", () => {
    mouseenter_leave.style.width = "30px";
    mouseenter_leave.style.height = "30px";
});


// onmousemove: The mouse pointer moves over an element
// Decription: The onmousemove event occurs when the pointer moves over an element.

// onmouseout: The mouse pointer moves out of an element
// Decription: The onmouseout event occurs when the mouse pointer moves out of an element.  The onmouseout event is often used together with the onmouseover event, which occurs when the pointer is moved over an element.

// onmouseover: The mouse pointer moves onto an element
// Decription: The onmouseover event occurs when the mouse pointer enters an element.  The onmouseover event is often used together with the onmouseout event, which occurs when the mouse pointer leaves the element.

let x = 0;
let y = 0;
let z = 0;

const a = document.querySelector("#demo1");
const b = document.querySelector("#demo2");
const c = document.querySelector("#demo3");

function myMovefunction(){
    a.innerHTML = x+=1;
}

function myEnterfunction(){
    b.innerHTML = y+=1;
}

function myOverfunction(){
    c.innerHTML = z+=1;
}

const d = document.querySelector("#demo4");
const e = document.querySelector("#demo5");
const f = document.querySelector("#demo6");

function myMove1function(){
    d.innerHTML = x+=1;
}

function myLeave1function(){
    e.innerHTML = y+=1;
}

function myOut1function(){
    f.innerHTML = z+=1;
}


// Mouse event properties

// altKey: If the ALT key is pressed

// Description: The altKey property returns true if the ALT key is pressed when a mouse event occurs. Otherwise it returns false.The altKey property is read-only.

// Syntax: event.altKey

// Return value: Boolean

// const clickEvent = document.querySelector('.click_event')

// clickEvent.addEventListener("click", (event) => {
//     if(event.altKey){
//         document.body.style.backgroundColor = "red";
//         document.body.style.color = "green";
//     }else{
//         console.log("alt key not pressed!!");
//     }
// });


// button: Which mouse button is pressed

// Description:  The button property returns which mouse button is pressed when a mouse event occurs. The button property is mostly used with the onmousedown event. The button property is read-only.

// Return value: A number
                //   Which mouse button that was pressed:
                //   0 = left button
                //   1 = wheel or middle button (pressed)
                //   2 = right button

const button = document.querySelector(".button");
const output1 = document.querySelector(".demo7");

button.addEventListener("mousedown", (event) => {
    let h = event.button;
    output1.innerHTML = h;
    console.log(h);
});

// buttons: Which mouse buttons were pressed

// Description:  The buttons property returns which mouse buttons are pressed when a mouse event occurs. The buttons property is mostly used with the onmousedown event. The buttons property is read-only.


// Return value: A Number.
//             The mouse buttons that were pressed when the mouse event occured. If more than one button is pressed, the values are added.

//             1 : Left mouse button
//             2 : Right mouse button
//             4 : Wheel or middle button
//             8 : Fourth button (Browser Back)
//             16 : Fifth button (Browser Forward)

const buttons = document.querySelector(".buttons");
const output2 = document.querySelector(".demo8");

buttons.addEventListener("mousedown" , (event) => {
    let h = event.buttons;
    output2.innerHTML = h;
    console.log(h);
});

// ctrlKey: If the CTRL key is pressed

// Description: The ctrlKey property returns true if the CTRL key is pressed when a mouse event occurs. Otherwise it returns  alse. The ctrlKey property is read-only.

// Return value: boolean

const clrt = document.querySelector(".lctrkey");

clrt.addEventListener("mousedown", (event) => {
     if(event.ctrlKey){
        console.log("hii");
     }else{
        console.log("not");
     }
})


// detail: The details about an event

// Description: The detail property returns details about an event. The detail property is read-only.

// Return value: click count from click and dblclick events. click count + 1 from mousedown and mouseup events. 2 for a dblclick event. 0 for all other events.

const details = document.querySelector(".details");

details.addEventListener("click", (event) => {
    let h = event.detail;

    if(h === 2){
        body.style.backgroundColor = "red";
    }

    if(h === 1){
        body.style.backgroundColor = "green";
    }

    console.log(h);
})


// metaKey: If the META key is pressed

// Description: The metaKey property returns true if the META key is pressed when a mouse event is triggered, otherwise it returns false. The metaKey property is read-only.

// Notes: Not all keyboards have a META key. On Windows it is the Window ⊞ key. On Mac machines it is the Cmd ⌘ key.

// Return value: A Boolean

const metakey = document.querySelector(".metakey");


metakey.addEventListener("mousedown", (e) => {
    if(e.metaKey){
        console.log("Click on window key");
    }
});

// shiftKey: If the SHIFT key is pressed

// Descripiton: The shiftKey property returns true if the shift key is pressed when a mouse event is triggered, otherwise it returns false.  The shiftKey property is read-only.

// Return value: A Boolean

const shiftkey = document.querySelector(".shiftkey");

shiftkey.addEventListener("mousedown", (e) => {
    if(e.shiftKey){
        console.log("Click on mouse + shift key");
    }else{
        console.log("Not click on shift key");
    }
});


// Coordinate properties

// screenX: The X coordinate of the mouse pointer (screen relative)

// Descripition: The screenX property returns the horizontal screen coordinate of the mouse pointer when a mouse event is  triggered. The screenX property is read-only.

// Return value: A number

// screenY: The Y coordinate of the mouse pointer (screen relative)

// Descripition: The screenY property returns the vertical screen coordinate of the mouse pointer when a mouse event occurs. The screenY property is read-only.

// Return value: A number

// clientX: The X coordinate of the mouse pointer (window relative)

// Description: The clientX property returns the horizontal client coordinate of the mouse pointer when a mouse event occurs. The clientX property is read-only. The client area is the current window.

// Return value: A number

// clientY: The Y coordinate of the mouse pointer (window relative)

// Description: The clientY property returns the vertical client coordinate of the mouse pointer when a mouse event occurs. The clientY property is read-only. The client area is the current window.

// Return value: A number

// pageX: The X coordinate of the mouse pointer (document relative)

// Description: The pageX property returns the document relative X coordinate of the mouse pointer when a mouse event occurs. The pageX property is read-only. The document is the web page.

// Return value: A number

// pageY: The Y coordinate of the mouse pointer (document relative)

// Description: The pageY property returns the document relative coordinate the mouse pointer when a mouse event occurs. The pageY property is read-only. The document is the web page.

// Return value: A number

// offsetX: The X coordinate of the mouse pointer (target relative)

// Description: The offsetX property returns the relative horizontal coordinate of the mouse pointer when a mouse event occurs. The offsetX property is read-only.

// Return value: A number

// offsetY: The Y coordinate of the mouse pointer (target relative)

// Description: The offsetY property returns the relative vertical coordinate of the mouse pointer when a mouse event occurs. The offsetY property is read-only.

// Return value: A number

// All code

const screen = document.querySelector(".screen");

screen.addEventListener("click", (event) => {
    let a = event.screenX;
    let b = event.screenY;

    let c = event.clientX;
    let d = event.clientY;

    let e = event.pageX;
    let f = event.pageY

    let g = event.offsetX;
    let h = event.offsetY;

    console.log(`screenX: ${a} and screenY: ${b} \nclientX: ${c} clientY: ${d} \npageX: ${e} pageY: ${f} \noffsetX: ${g} offsetY: ${h}`);
});


// Keybard Event in javascript

// The KeyboardEvent Object handles events that occur when a user presses a key on the keyboard.


// 1. onkeydown / keydown

// Description: The onkeydown event occurs when the user presses a key on the keyboard.

const keydown = document.querySelector(".keydown");

keydown.addEventListener("keydown", (e) =>{
    // console.log("Keydown now");
    // document.getElementById("test").style.backgroundColor = "red";

    if(e.altKey){
        const date = new Date();
        console.log(date);
    }

});

// 2. onkeypress / keypress

// Description: The onkeypress event occurs when the user presses a key on the keyboard.

keydown.addEventListener("keypress", (e) => {
    let a = e.target.value;
    console.log(a);
});

// 3. onkeyup / keyup

// Description: The onkeyup event occurs when the user releases a key on the keyboard.

keydown.addEventListener("keyup", () => {
    // document.getElementById("test").style.backgroundColor = "green";
});


// Keyboard event properties

// 1. altKey

// Description: The altKey property returns true if the ALT key is pressed when a keyboard event occurs. Otherwise it returns false. The altKey property is read-only.

// 2. code
// 3. ctrlKey
// 4. isComposing
// 5. Key
// 6. KeyCode
// 7. location
// 8. metaKey
// 9. repeat
// 10. shiftKey











// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events 
// https://www.codeguage.com/courses/js/events-event-objects