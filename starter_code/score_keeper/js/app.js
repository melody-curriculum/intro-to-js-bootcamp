// We will be creating a simple score keeper application using JavaScript.
// The HTML and CSS has already been done for you here.
// Here are the steps you should take:
// Step 1: Add a link to your own custom JS file before the closing body tag.
// Step 2: Bind click events to the +5 and -5 point buttons and change the innerHTML of the score display appropriately.
// Step 3: Bind a click event to the set score button and set the innerHTML of the score display to the score entered in the text box. You will need to use the parseInt function in JS to make this work.
// Bonus: Create a check in your code to make sure the score will not go negative.
// Super Bonus: Create a function to make the changes to the score display rather than having to write your logic over and over.

// create a variable and name it score, set the value to 0


//complete step 2:



//complete step 3:


//Bonus + Super bonus

function changeScore() {
	if (score < 0) {
		return false;
	} else {
		document.getElementById("score").innerHTML = score + " Points";
	}
}