// Get the button element
var button = document.getElementById("myButton");

// Add an event listener for when the button is clicked
button.addEventListener("click", function() {
  // Change the text of the button
  button.innerHTML = "Thanks for clicking!";
  
  // Change the background color of the page
  document.body.style.backgroundColor = "#f2f2f2";
});
