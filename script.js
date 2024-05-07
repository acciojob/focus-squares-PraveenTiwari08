//your JS code here. If requ
// Get all the square elements
var squares = document.querySelectorAll(".square");

// Loop through each square
squares.forEach(function(square) {
    // Add event listener for mouseover event
    square.addEventListener("mouseover", function() {
        // Loop through each square again to change background color of other squares
        squares.forEach(function(otherSquare) {
            if (otherSquare !== square) { // Exclude the hovered square
                otherSquare.style.backgroundColor = "#6F4E37"; // Change background color to Coffee
            }
        });
    });

    // Add event listener for mouseout event to revert background color
    square.addEventListener("mouseout", function() {
        // Loop through each square again to revert background color of other squares
        squares.forEach(function(otherSquare) {
            otherSquare.style.backgroundColor = "#E6E6FA"; // Revert background color to Lavender
        });
    });
});
