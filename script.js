const img = document.getElementById("bouncing-img");

let xSpeed = 2; // Speed in X direction
let ySpeed = 2; // Speed in Y direction
let xPos = 100; // Initial X position
let yPos = 100; // Initial Y position

function moveImage() {
    const containerWidth = window.innerWidth - img.clientWidth;
    const containerHeight = window.innerHeight - img.clientHeight;

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos >= containerWidth || xPos <= 0) {
        xSpeed *= -1; // Reverse direction
    }
    if (yPos >= containerHeight || yPos <= 0) {
        ySpeed *= -1; // Reverse direction
    }

    img.style.left = xPos + "px";
    img.style.top = yPos + "px";

    requestAnimationFrame(moveImage);
}

moveImage();
