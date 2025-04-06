console.log("canvas.js loaded");
var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth-20;
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
function styleButton(button, text, topOffset) {
    button.innerHTML = text;
    button.style.position = "absolute";
    button.style.left = (canvas.width / 2 -text.length*12/2) + "px";
    button.style.top = (canvas.height / 2 + topOffset) + "px";
    button.style.width = text.length*12+"px";
    button.style.height = "50px";
    button.style.backgroundColor = "lightblue";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.fontSize = "20px";
    button.style.cursor = "pointer";
}

function fillMultilineText(ctx, text, x, y) {
    var lines = text.split("\n");
    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, y + (i * 30));
    }
}


var button1 = document.createElement("button");
styleButton(button1, "Start Adventure", 50);

var button2 = document.createElement("button");
styleButton(button2, "Credits", 150);
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
    // Clear the canvas

    button1.style.display = "none";
    button2.style.display = "none";
    var creditsText =
        `NOTE: current credits do not reflect actual rights holders, dummy data<br>
        Jack: Development<br>
        Molly: "Cloud" piece 2024 <br>
        Javier: "Castle" piece 2025<br>
        Pablo: "Forest" piece 2001 `;
    
    updateTextArea(creditsText);
    updateButtons("menu");
});

// in game logic, two buttons (left and right) to move the character,
// create tree structure of images and text


//create area below cavnas for text
var textArea = document.createElement("div");
textArea.style.position = "absolute";
textArea.style.top = (canvas.offsetTop + canvas.height + 10) + "px"; // 10px margin below canvas
textArea.style.left = canvas.offsetLeft + "px";
textArea.style.width = canvas.width + "px";
textArea.style.height = "auto"; // Allow height to adjust based on content
textArea.style.backgroundColor = "lightblue";
textArea.style.border = "none";
textArea.style.borderRadius = "5px";
textArea.style.fontSize = (canvas.width * 0.02) + "px"; // Set font size proportional to canvas width
textArea.style.cursor = "pointer";
textArea.style.textAlign = "center";
textArea.style.lineHeight = "50px";

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
            textArea.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(window.textUpdateInterval);
        }
    }, 50); // Adjust speed of text appearance here
}

// Function to resize canvas and adjust related elements
function resizeCanvas() {
    canvas.width = window.innerWidth - 20;
    canvas.height = canvas.width * 9 / 16;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    textArea.style.top = (canvas.offsetTop + canvas.height + 10) + "px";
    textArea.style.left = canvas.offsetLeft + "px";
    textArea.style.width = canvas.width + "px";
    textArea.style.fontSize = (canvas.width * 0.03) + "px";
    textArea.style.lineHeight = "20px";
    updateScene(currentScene); // Update the scene to redraw the current image and text
    positionButtons();
}

// Function to position buttons relative to the textArea
function positionButtons() {
    leftButton.style.left = (textArea.offsetLeft + 10) + "px";
    leftButton.style.top = (textArea.offsetTop - 30) + "px";

    rightButton.style.left = (textArea.offsetLeft + textArea.offsetWidth - rightButton.offsetWidth - 70) + "px";
    rightButton.style.top = (textArea.offsetTop -30) + "px";
}

// Function to handle image and text updates
function updateScene(sceneName) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    currentScene = sceneName;
    currentImage = images[sceneName].image;
    currentText = images[sceneName].text;
    character.src = currentImage;
    character.onload = function() {
        ctx.drawImage(character, 0, 0, canvas.width, canvas.height);
        updateTextArea(currentText);
    };
}
function updateButtons(sceneName) {
    if (images[sceneName].left) {
        leftButton.style.display = "block";
        leftButton.innerHTML = images[sceneName].leftText;
    } else {
        leftButton.style.display = "none";
    }
    if (images[sceneName].right) {
        rightButton.style.display = "block";
        rightButton.innerHTML = images[sceneName].rightText;
    
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
var character = new Image();

// Load the character image
character.src = currentImage;
character.onload = function() {
    ctx.drawImage(character, 0, 0, canvas.width, canvas.height);
    updateTextArea(currentText); // Update textArea
};
character.src = currentImage;
// Create left and right buttons
var rightButton = document.createElement("button");
styleButton(rightButton, "Right", 0);
rightButton.style.display = "none"; // Hide initially

var leftButton = document.createElement("button");
styleButton(leftButton, "Left", 0);
leftButton.style.display = "none"; // Hide initially
// Append buttons to the canvas
document.body.appendChild(leftButton);
document.body.appendChild(rightButton);

var resetButton = document.createElement("button");
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
