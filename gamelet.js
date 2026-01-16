const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let positionX = 0;
let positionY = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    positionX = positionX - 25;
  }
  if (e.code === "ArrowRight") {
    positionX = positionX + 25;
  }
  if (e.code === "ArrowDown") {
    positionY = positionY + 25;
  }
  if (e.code === "ArrowUp") {
    positionY = positionY - 25;
  }
  if (positionX < 0) {
    positionX = 0;
  }
  if (positionY < 0) {
    positionY = 0;
  }
  refresh(); // update the ball's position
}
function refresh() {
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}
