const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);



const theSiberian = document.getElementById("theSiberian");

function changeColor(event) {
   event.target.style.backgroundColor = "green";
   event.target.textContent = "I love Siberian Cats 😻"
}

theSiberian.addEventListener("click", changeColor);


function colorBack(event){
   event.target.style.backgroundColor = "red";
   event.target.textContent = "Click Me 😾"
}

theSiberian.addEventListener("mouseout", colorBack);