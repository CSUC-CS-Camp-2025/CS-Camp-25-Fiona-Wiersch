//This is where you implement your Event Listener.
//Remember to use the element ids.


//run this to host site: php -S localhost:3006 -t ./


//have to add the event listener to allow the ability to decect when the action of pressing a button has innitiated
addEventListener("DOMContentLoaded", () => {


   //setting the variable btn(button) to the id ("submit") <-- the id attached to the button
   const btn = document.getElementById("submit");


   //setting the variable input to th id ("name") esentially the id attaced to the input textbox
   const input = document.getElementById("name");


   //plays the following event when it decets the "click" of the btn(button)
   btn.addEventListener("click", (event) => {


       //without this the page will after a second revert back to its base
       event.preventDefault();


       //setting the variable for name as the value of our input
       const name = input.value;


       //setting the variable para to the id("greeting") menaing in this case para="Welcome!"
       const para = document.getElementById("greeting");


       //changing our variable by adding our variable name along with format
       para.textContent="Welcome, "  + name + "!";
       //FREAKFRANCEMETHOD...para.textContent = `Welcome, ${name}!`;


       //this makes it so after submitting a name the textbox clears
       input.value="";


   })


})