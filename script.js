var button = document.getElementById("enter");   //make vars to get values
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
} // returns input length 

function createListElement () {
	var li = document.createElement("li")
	li.appendChild(document.createTextNode(input.value))  //child appends to the list
	ul.appendChild(li); // list appends to the parent ul

	li.addEventListener('click', function(){ //add event listener to li 

		var finished = this.classList.toggle("done"); //toggles new class done when finish is true
		var removeButton = document.createElement("button"); //this isnt appended yet
		removeButton.classList.add("deleteButton");
	

		if (finished)  {  //finish is true if done is toggled to li

			removeButton.appendChild(document.createTextNode("remove")); 
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);  //gets appended to the parent li


			removeButton.addEventListener("click", function() {
				this.parentElement.remove()   //deletes also parent element li
				
				})

			};

	    }) ;

	input.value = ""; //clears input box
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);  //press mouse add 

input.addEventListener("keypress", addListAfterPress) //press enter add 