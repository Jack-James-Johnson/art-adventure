console.log("canvas.js loaded");

// First, add a container div for the canvas and shading
var container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);
// audio
function PlayMusic(){
    console.log("Playing music");
    var play=document.getElementById("music");
    play.volume = 0.1;
    play.play();
}
function PlayDeath()
{
    console.log("Playing death music");
    var play=document.getElementById("death");
    play.volume = 0.1;
    play.play();
}
function PlayTextAudio()
{
    var play=document.getElementById("text");
    play.volume = 0.1;
    play.play();
}
function StopTextAudio()
{
    var play=document.getElementById("text");
    play.pause();
    play.currentTime = 0;
}

function stopAllAudio() {
    const musicPlayer = document.getElementById("music");
    const textSound = document.getElementById("text");
    
    // Stop music
    if (musicPlayer) {
        musicPlayer.pause();
        musicPlayer.currentTime = 0;
    }
    
    // Stop text sound
    if (textSound) {
        textSound.pause();
        textSound.currentTime = 0;
    }
}
let prevText = "";

// Handle page visibility change
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        stopAllAudio();
        updateTextArea("",0);
    } else {
        // Optionally restart music when page becomes visible again
        setTimeout(PlayMusic, 100);
        updateTextArea(prevText,0);
    }
});

// Handle page unload
window.addEventListener("beforeunload", function() {
    stopAllAudio();
});

// Handle mobile specific events
window.addEventListener("pagehide", function() {
    stopAllAudio();
});

window.addEventListener("blur", function() {
    stopAllAudio();
});

var canvas = document.getElementById("canvas");
canvas.id = "canvas";
canvas.style.border = "2px solid black";
canvas.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)"; // Add shadow for better visibility
canvas.style.position = "relative"; // Change from absolute
canvas.style.left = "auto"; // Remove absolute positioning
canvas.style.transform = "none"; // Remove transform
canvas.style.margin = "0 auto"; // Center using margin
canvas.style.display = "block"; // Ensure block display
document.body.insertBefore(container, document.body.firstChild);
container.appendChild(canvas);

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
function styleButton(button, topOffset) {
    button.style.position = "absolute";
    let buttonText = button.querySelector('span');
    const canvasRect = canvas.getBoundingClientRect();
    button.style.left = (canvas.width * 0.5 - buttonText.length / 2) + "px";
    button.style.top = (canvasRect.top+ ((topOffset * canvas.height) / 100)) + "px";
    button.style.width = buttonText.length * 15 + "px";
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
styleButton(button1, 50);

var button2 = createButton("credits");
styleButton(button2, 150);
// Append buttons to the canvas
container.appendChild(button1);
container.appendChild(button2);

// Add event listeners to buttons
button1.addEventListener("click", function () {
    // Start the adventure
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    currentScene = "forest";
    updateScene(currentScene);
    button1.style.display = "none";
    button2.style.display = "none";
    updateButtons(currentScene);
});
button2.addEventListener("click", function () {

    button1.style.display = "none";
    button2.style.display = "none";

    updateTextArea(creditsText,0);
    updateButtons("menu");
});

// in game logic, two buttons (left and right) to move the character,
// create tree structure of images and text

//create area below cavnas for text
var textArea = document.createElement("div");
textArea.style.position = "absolute";
resizeTextArea();
textArea.style.height = canvas.height + "px"; // Allow height to adjust based on content
textArea.style.overflow = "auto"; // Hide overflow
textArea.style.backgroundColor = "#622b47";
textArea.style.border = "none";
textArea.style.borderRadius = "5px";
textArea.style.cursor = "cursor";
textArea.style.textAlign = "center";

// Append textArea to the document
container.appendChild(textArea);

// Update textArea content when the image changes
function updateTextArea(text,interval=25) {
    prevText = text; // Store the current text
    // Clear any existing interval to stop previous text updates
    if (window.textUpdateInterval) {
        clearInterval(window.textUpdateInterval);
    }

    textArea.innerHTML = ""; // Clear previous text
    var index = 0;
    window.textUpdateInterval = setInterval(function () {
        PlayTextAudio();
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
            StopTextAudio();
            clearInterval(window.textUpdateInterval);
        }
        textArea.scrollTop = textArea.scrollHeight; // Scroll to bottom
    }, interval); // Adjust speed of text appearance here
}
function resizeTextArea() {
    // Calculate position below canvas
    const canvasBottom = canvas.offsetTop + canvas.height;
    const remainingHeight = window.innerHeight - canvasBottom - 40; // 40px buffer

    textArea.style.position = "absolute";
    textArea.style.top = (canvasBottom + 20) + "px"; // 20px gap below canvas
    textArea.style.left = "50%";
    textArea.style.transform = "translateX(-50%)"; // Center like canvas
    textArea.style.width = canvas.width + "px"; // Match canvas width
    textArea.style.height = remainingHeight + "px";
    textArea.style.fontSize = (canvas.width * 0.03) + "px";
    textArea.style.textAlign = "left"; 
    textArea.style.lineHeight = "1.5";
    textArea.style.overflowY = "auto"; // Allow scrolling if text overflows
}

// Function to resize canvas and adjust related elements
function resizeCanvas() {
    // Set maximum width for mobile-first design
    let maxWidth = Math.min(window.innerWidth, 500); // Limit width on larger screens

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Mobile: use 90% of screen width
        canvas.width = window.innerWidth * 0.9;
    } else {
        // Desktop: use calculated width
        canvas.width = maxWidth;
    }
    
    canvas.height = (canvas.width);

    // Center the canvas horizontally
    canvas.style.position = "absolute";
    canvas.style.left = "50%";
    canvas.style.transform = "translateX(-50%)";

    // Add some margin at the top
    canvas.style.top = "20px";

    // Update context properties after resize
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.font = Math.floor(canvas.width * 0.04) + "px Arial"; // Responsive font size
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Update related elements
    resizeTextArea();
    updateScene(currentScene); // Update the scene to redraw the current image and text
    positionButtons();
}

// Function to position buttons relative to the textArea
function positionButtons() {
    const buttonPadding = 20; // padding from canvas edges
    const buttonY = canvas.offsetTop + canvas.height - 60; // 60px up from canvas bottom
    const canvasRect = canvas.getBoundingClientRect();
    
    // Calculate button widths based on text content
    let leftButtonText = leftButton.querySelector('span').textContent;
    let rightButtonText = rightButton.querySelector('span').textContent;
    let leftButtonWidth = Math.max(leftButtonText.length * 25,90); // Approximate width per character
    let rightButtonWidth = Math.max(rightButtonText.length * 25, 90); // Ensure it fits within canvas width
    
    // Position left button at bottom left of canvas
    leftButton.style.position = "absolute";
    leftButton.style.left = (canvasRect.left + buttonPadding) + "px";
    leftButton.style.top = buttonY + "px";
    leftButton.style.width = leftButtonWidth + "px";
    
    // Position right button at bottom right of canvas
    rightButton.style.position = "absolute";
    rightButton.style.left = (canvasRect.left + canvasRect.width - rightButtonWidth - buttonPadding) + "px";
    rightButton.style.top = buttonY + "px";
    rightButton.style.width = rightButtonWidth + "px";
    
    // Position reset button at bottom center if needed
    if (resetButton) {
        const resetButtonText = resetButton.querySelector('span').textContent;
        const resetButtonWidth = resetButtonText.length * 25;
        resetButton.style.position = "absolute";
        resetButton.style.left = (canvasRect.left + (canvasRect.width - resetButtonWidth) / 2) + "px";
        resetButton.style.top = buttonY + "px";
        resetButton.style.width = resetButtonWidth + "px";
    }
}

function updateButtons(sceneName) {
    if (images[sceneName].left !=null) {
        leftButton.style.display = "block";
        leftButton.innerHTML = '<div class="button"><span>' + images[sceneName].leftText; + '</span></div>';
    } else {
        leftButton.style.display = "none";
    }
    if (images[sceneName].right != null) {
        rightButton.style.display = "block";
        rightButton.innerHTML = '<div class="button"><span>' + images[sceneName].rightText; + '</span></div>';

    } else {
        rightButton.style.display = "none";
    }
    if (images[sceneName].right == null && images[sceneName].left == null) {
        resetButton.style.display = "block";
    }
    else {
        resetButton.style.display = "none";
    }
    positionButtons();
}

// Attach resize event listener
window.addEventListener("resize", resizeCanvas);

// start in forest, choosing "left" will take you to the castle, choosing "right" will take you to the clouds
var currentScene = "menu";
var currentImage = images[currentScene].image;
var currentText = images[currentScene].text;
var character = new Image();

// Global variable to hold the current GIF animation instance
var isGif = false;

// Load the character image
character.src = currentImage;
character.onload = function () {
    updateScene(currentScene);
};
// Function to handle image and text updates
function updateScene(sceneName) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log("Updating scene to:", sceneName);
    currentScene = sceneName;
    currentImage = images[sceneName].image;
    currentText = images[sceneName].text;

    // Normalize the image path for both local and GitHub Pages
    currentImage = images[sceneName].image;
    // Remove any leading slash and ensure proper path structure
    currentImage = currentImage.replace(/^\//, '').replace(/^images\//, './images/');

    // Stop any previous GIF animation
    if (isGif) {
        console.log("Stopping previous GIF");
        isGif = false;
    }
    if (currentImage.includes("Death")) {
        PlayDeath();
    }
    // Check if the image is a gif (case insensitive; adjust check as needed)
    if (currentImage.includes('/_')) {
        console.log("Loading animated image:", currentImage);
        isGif = true;
        currentFrame = 0;
        maxFrame = images[sceneName].frame_count - 1;

        // Add error handling for animated image loading
        character.onerror = function (e) {
            console.error("Error loading animated image:", currentImage, e);
            isGif = false;
            ctx.fillStyle = "red";
            ctx.fillText("Error loading animation", canvas.width / 2, canvas.height / 2);
        };

        character.onload = function () {
            console.log("Successfully loaded animated image:", currentImage);
        };

        character.src = currentImage;
        frameWidth = 1000;
        frameHeight = 1000;
        updateTextArea(currentText);
        fadeInEffect(500);
    } else {
        // For non-gif images, load them normally
        character.src = currentImage;
        character.onload = function () {
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
        console.log("Fading in with alpha:", alpha);
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
function drawFrame() {
    if (!isGif) {
        return;
    }

    // Increment current frame
    currentFrame++;
    let maxFrame = images[currentScene].frame_count - 1;
    if (currentFrame > maxFrame) {
        currentFrame = 0;
    }

    // Use fixed 3 columns for the sprite sheet layout
    let numberOfColumns = images[currentScene].frame_count < 4 ? 2: 3;
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

var resetButton = createButton("Return");
styleButton(resetButton, "Return", 0);
resetButton.style.display = "none"; // Hide initially
// Append reset button to the canvas
document.body.appendChild(resetButton);
// Add event listener to reset button
resetButton.addEventListener("click", function () {
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
leftButton.addEventListener("click", function () {
    updateScene(images[currentScene].left);
    updateButtons(currentScene)

});

rightButton.addEventListener("click", function () {
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
setTimeout(PlayMusic,1000);

// Preload all images
function preloadImages() {
    console.log("Starting image preload...");
    const imageCache = {};
    let loadedImages = 0;
    const totalImages = Object.keys(images).length;

    return new Promise((resolve) => {
        // Show loading progress on canvas
        function updateLoadingProgress() {
            const progress = Math.floor((loadedImages / totalImages) * 100);
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillText(`Loading... ${progress}%`, canvas.width / 2, canvas.height / 2);
        }

        // Load each image
        for (const sceneName in images) {
            const imgPath = images[sceneName].image;
            const img = new Image();
            
            img.onload = function() {
                loadedImages++;
                imageCache[sceneName] = img;
                updateLoadingProgress();
                
                if (loadedImages === totalImages) {
                    console.log("All images preloaded successfully");
                    resolve(imageCache);
                }
            };

            img.onerror = function(e) {
                console.error(`Error loading image for scene ${sceneName}:`, e);
                loadedImages++;
                updateLoadingProgress();
                
                if (loadedImages === totalImages) {
                    resolve(imageCache);
                }
            };

            img.src = imgPath;
        }
    });
}

// Update your initialization code to use preloaded images
async function initGame() {
    const imageCache = await preloadImages();
    
    // Start the game only after images are loaded
    currentScene = "menu";
    currentImage = images[currentScene].image;
    currentText = images[currentScene].text;
    character = imageCache[currentScene];
    
    updateScene(currentScene);
    resizeCanvas();
    positionButtons();
    setTimeout(PlayMusic, 1000);
}

// Start the game
initGame();
