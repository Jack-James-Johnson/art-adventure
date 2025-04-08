console.log("canvas.js loaded");
var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth*0.8;
canvas.style.position = "absolute";
canvas.style.left = "0px";
canvas.style.border= "2px solid black";
// move canvas to middle of screen horizontally
canvas.style.marginLeft = window.innerWidth*0.2 + "px";
canvas.style.marginRight = "auto";
// Set height to 16:9 ratio
canvas.height = window.innerWidth * 9 / 16;

// Get the 2D drawing context
var ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.font = "20px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillStyle = "black";
ctx.fillText("Loading...", canvas.width / 2, canvas.height / 2);

// Main menu logic
// create 2 buttons within canvas space, named button1 ("Start Adventure") and button2 ("Credits")
function styleButton(button,text, topOffset) {
    button.style.position = "absolute";
    button.style.left =( window.innerWidth*0.5 -text.length*12/2) + "px";
    button.style.top = (canvas.height / 2 + topOffset*canvas.height/1000) + "px";
    button.style.width = text.length*23+"px";
    button.style.height = "50px";
    button.style.cursor = "pointer";
}

function fillMultilineText(ctx, text, x, y) {
    var lines = text.split("\n");
    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, y + (i * 30));
    }
}


var button1 = createButton("Start");
styleButton(button1,"start", 50);

var button2 = createButton("credits");
styleButton(button2,"credits", 150);
// Append buttons to the canvas
document.body.appendChild(button1);
document.body.appendChild(button2);

// Add event listeners to buttons
button1.addEventListener("click", function() {
    // Start the adventure
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    currentScene = "forest";
    updateScene(currentScene);
    button1.style.display = "none";
    button2.style.display = "none";
    leftButton.style.display = "block";
    rightButton.style.display = "block";
});
button2.addEventListener("click", function() {
 
    button1.style.display = "none";
    button2.style.display = "none";

    updateTextArea(creditsText);
    updateButtons("menu");
});

// in game logic, two buttons (left and right) to move the character,
// create tree structure of images and text


//create area below cavnas for text
var textArea = document.createElement("div");
textArea.style.position = "absolute";
resizeTextArea();
textArea.style.height = canvas.height+"px"; // Allow height to adjust based on content
textArea.style.overflow = "auto"; // Hide overflow
textArea.style.backgroundColor = "lightblue";
textArea.style.border = "none";
textArea.style.borderRadius = "5px";
textArea.style.cursor = "cursor";
textArea.style.textAlign = "center";

// Append textArea to the document
document.body.appendChild(textArea);

// Update textArea content when the image changes
function updateTextArea(text) {
    // Clear any existing interval to stop previous text updates
    if (window.textUpdateInterval) {
        clearInterval(window.textUpdateInterval);
    }

    textArea.innerHTML = ""; // Clear previous text
    var index = 0;
    window.textUpdateInterval = setInterval(function() {
        if (index < text.length) {
            if (text.charAt(index) === "<" && text.substring(index, index + 4) === "<br>") {
                textArea.innerHTML += "<br>";
                index += 4; // Skip over "<br>"
            }
            //else if hyper link, find end of link, put in a tag correctly and put in text area
            else if (text.charAt(index) === "<" && text.substring(index, index + 3) === "<a ") {
                var endIndex = text.indexOf(">", index);
                if (endIndex !== -1) {
                    // Get the opening tag (e.g. <a href="...">)
                    var anchorOpening = text.substring(index, endIndex + 1);
                    // Find the closing tag index
                    var closingTagIndex = text.indexOf("</a>", endIndex + 1);
                    if (closingTagIndex !== -1) {
                        // Extract the text inside the anchor tag
                        var anchorText = text.substring(endIndex + 1, closingTagIndex);
                        // Append complete anchor element: opening tag + text + closing tag
                        textArea.innerHTML += anchorOpening + anchorText + "</a>";
                        // Move index to the end of the closing tag
                        index = closingTagIndex + 4;
                    } else {
                        // If no closing tag is found, fallback to appending a single character
                        textArea.innerHTML += text.charAt(index);
                        index++;
                    }
                }
            }
             else {
                textArea.innerHTML += text.charAt(index);
                index++;
            }
        } else {
            clearInterval(window.textUpdateInterval);
        }
    }, 25); // Adjust speed of text appearance here
}
function resizeTextArea() {
    textArea.style.top = (canvas.offsetTop + 10) + "px";
    textArea.style.left = 0+ "px";
    textArea.style.height = canvas.height + "px";
    textArea.style.width = canvas.width/2 + "px";
    textArea.style.fontSize = (canvas.width * 0.03) + "px";
    textArea.style.lineHeight = "20px";
}
// Function to resize canvas and adjust related elements
function resizeCanvas() {
    canvas.width = window.innerWidth* 0.3;
    canvas.height = canvas.width;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    resizeTextArea();
    updateScene(currentScene); // Update the scene to redraw the current image and text
    positionButtons();
}

// Function to position buttons relative to the textArea
function positionButtons() {
    leftButton.style.left = (canvas.offsetLeft + 10) + "px";
    leftButton.style.top = (textArea.offsetTop - 30) + "px";

    rightButton.style.right=   (canvas.offsetRight*0.1) + "px";
    rightButton.style.top = (textArea.offsetTop -30) + "px";
}


function updateButtons(sceneName) {
    if (images[sceneName].left) {
        leftButton.style.display = "block";
        leftButton.innerHTML = '<div class="button"><span>' + images[sceneName].leftText; + '</span></div>';
    } else {
        leftButton.style.display = "none";
    }
    if (images[sceneName].right) {
        rightButton.style.display = "block";
        rightButton.innerHTML = '<div class="button"><span>' + images[sceneName].rightText; + '</span></div>';
    
    } else {
        rightButton.style.display = "none";
    }
    if(images[sceneName.Right]==null && images[sceneName.left] == null){
        resetButton.style.display = "block";
    }
}

// Attach resize event listener
window.addEventListener("resize", resizeCanvas);

// start in forest, choosing "left" will take you to the castle, choosing "right" will take you to the clouds
var currentScene = "menu";
var currentImage = images[currentScene].image;
var currentText = images[currentScene].text;
var character =  new Image();

// Global variable to hold the current GIF animation instance
var isGif = false;

// Load the character image
character.src = currentImage;
character.onload = function() {
    updateScene(currentScene);
};
// Function to handle image and text updates
function updateScene(sceneName) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    currentScene = sceneName;
    currentImage = images[sceneName].image;
    currentText = images[sceneName].text;

    // Stop any previous GIF animation
    if (isGif) {
        console.log("Stopping previous GIF");
        isGif = false;
    }

    // Check if the image is a gif (case insensitive; adjust check as needed)
    if (currentImage.toLowerCase().includes("/_")) {
        console.log("Loading GIF:", currentImage);
        isGif = true;
        // Reset frame counters
        currentFrame = 0;
        maxFrame = images[sceneName].frame_count - 1;
        sqrtSize = Math.ceil(Math.sqrt(images[sceneName].frame_count));
        character.src = currentImage;
        // Set sprite dimensions as needed
        frameWidth = 1000;
        frameHeight = 1000;
        // For GIFs the drawFrame interval will update the canvas.
        updateTextArea(currentText);
        fadeInEffect(500);  // fade duration in ms
    } else {
        // For non-gif images, load them normally
        character.src = currentImage;
        character.onload = function() {
            ctx.drawImage(character, 0, 0, canvas.width, canvas.height);
            updateTextArea(currentText);

        };
    }
}

// Fade in effect: overlays a black rectangle that fades out over the given duration
function fadeInEffect(duration) {
    let startTime = null;
    function animateFade(timestamp) {
        if (!startTime) startTime = timestamp;
        let elapsed = timestamp - startTime;
        // Calculate alpha from 1 to 0
        let alpha = 1 - Math.min(elapsed / duration, 1);
        // Redraw the current scene (already drawn) then overlay black with current alpha
        // For GIFs, the drawFrame will be continuously updating; this overlay sits on top.
        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        if (elapsed < duration) {
            requestAnimationFrame(animateFade);
        }
    }
    requestAnimationFrame(animateFade);
}

// The sprite image frame starts from 0
let currentFrame = 0;
sqrtSize = Math.ceil(Math.sqrt(images[currentScene].frame_count));
let frameWidth = 1000;
let frameHeight = 1000;
setInterval(drawFrame, 100);
function drawFrame(){
    if (!isGif) {
        return;
    }
    
    // Increment current frame
    currentFrame++;
    let maxFrame = images[currentScene].frame_count - 1;
    if (currentFrame > maxFrame){
         currentFrame = 0;
    }
    
    // Use fixed 3 columns for the sprite sheet layout
    let numberOfColumns = 3;
    let column = currentFrame % numberOfColumns;
    let row = Math.floor(currentFrame / numberOfColumns);
    
    
    // Clear canvas and draw the selected frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(character, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 0, 0, canvas.width, canvas.height);
}


character.src = currentImage;
// Create left and right buttons
var rightButton = createButton("Right");
styleButton(rightButton, "Right", 0);
rightButton.style.display = "none"; // Hide initially

var leftButton = createButton("Left");
styleButton(leftButton, "Left", 0);
leftButton.style.display = "none"; // Hide initially
// Append buttons to the canvas
document.body.appendChild(leftButton);
document.body.appendChild(rightButton);

var resetButton = createButton("Return to Menu");
styleButton(resetButton, "Return to Menu", 0);
resetButton.style.display = "none"; // Hide initially
// Append reset button to the canvas
document.body.appendChild(resetButton);
// Add event listener to reset button
resetButton.addEventListener("click", function() {
    // Reset the game
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    currentScene = "menu";
    updateScene(currentScene);
    button1.style.display = "block";
    button2.style.display = "block";
    leftButton.style.display = "none";
    rightButton.style.display = "none";
    resetButton.style.display = "none";
});
// Update button event listeners to use updateScene
leftButton.addEventListener("click", function() {
    updateScene(images[currentScene].left); 
    updateButtons(currentScene)
    
});

rightButton.addEventListener("click", function() {
    updateScene(images[currentScene].right); 
    updateButtons(currentScene);
});

resizeCanvas();
positionButtons(); // Position buttons initially
// function to create button element with formatting: <div class="box_button"><div class="button"><span>text</span></div></div>
function createButton(text) {
    var button = document.createElement("div");
    button.className = "box-button";
    button.innerHTML = '<div class="button"><span>' + text + '</span></div>';
    return button;
}