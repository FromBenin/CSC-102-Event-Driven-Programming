// These are my global variables
var x = 100, y = 100; // This is the position where the image will be placed before it starts moving.
var dx = 5, dy = 5; // This is the movement speed of the image
var intervalidID = 0; // This will store the value of the interval

// This function starts the movement of the image
function startImg() {
    // I created a variable to get the image from the HTML through the ID
    var meme = document.getElementById("memeImage");

    // This will disable the start button and enable the stop button
    document.getElementById("startbtn").disabled = true;
    document.getElementById("stopbtn").disabled = false;

    // I set an interval to move the image every 30 milliseconds
    intervalidID = setInterval(function(){
        // I update the position of the image
        meme.style.top = y + "px";
        meme.style.left = x + "px";

        // This will update the innerHTML of the element with id "XandY" to display the current position of the image.
        document.getElementById("XandY").innerHTML = " X = " + meme.style.left + " Y = " + meme.style.top;

        if (x + meme.width >= window.innerWidth || x <= 0) {
            dx = -dx; // Reverse the horizontal direction
        }
        if (y + meme.height >= window.innerHeight || y <= 0) {
            dy = -dy; // Reverse the vertical direction
        }

        // I update the position for the next frame
        x += dx;
        y += dy;
    }, 30);
}

// This function stops the movement of the image
function stopImg() {
    // I disable the stop button and enable the start button
    document.getElementById("stopbtn").disabled = true;
    document.getElementById("startbtn").disabled = false;
    // I clear the interval to stop the image from moving
    clearInterval(intervalidID);
}