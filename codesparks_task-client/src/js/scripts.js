
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const widthCircleSize = 100;
const heightCircleSize = 100;

// piece object
const piece = (function() {
  let el = null;

  const init = function(el) {
    this.el = el;
  };

  const moveDelta = function(dx, dy) {
    const pos = this.el.getBoundingClientRect();
    let moveInterval;
    

    if(dx !== 0 && pos.left + dx >= widthCircleSize && pos.left + dx <= windowWidth){
      moveInterval = setInterval(moveCircle, 10);
    }
    else if(dy !== 0 && pos.top + dy >= heightCircleSize && pos.top + dy <= windowHeight){
      moveInterval = setInterval(moveCircle, 10);
    }

    let move = 0;
    let circleHtml = document.getElementById("piece");
    function moveCircle(){
      let posEle;
      dx === 0 ? posEle = dy : posEle = dx;
      
      if (move === Math.abs(posEle)) {
        move = 0;
        clearInterval(moveInterval);
      }
      else {
        move++;
        dx === 0 ? 
          circleHtml.style.top = `${pos.top + move * (posEle / 100)}px` :
          circleHtml.style.left = `${pos.left + move * (posEle / 100)}px`;
      }
    }
  };
  
  return {
    init,
    moveDelta
  };
})();

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function init() {
  const $btnUp = setDataset("btn-up", 0, -100);
  const $btnRight = setDataset("btn-right", 100, 0);
  const $btnDown = setDataset("btn-down", 0, 100);
  const $btnLeft = setDataset("btn-left", -100, 0);
  getTemparature();
  
}

// get temperature from api and display it on the html file
function getTemparature(){
  fetch('https://weatherstack.glitch.me/current?access_key=5f58d7a0eecd822f4bd469586df5585c&query=tel%20aviv')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    const temp = myJson.current.temperature;
    const colorOfTemperature = getTemparatureColor(temp);
    
    let tempText = document.getElementById("temperature");
    tempText.innerHTML = temp;
    tempText.style.color = colorOfTemperature;
  });
}

function getTemparatureColor(temp){
    return temp < 10 ? "blue" : temp > 10 && temp <=20 ? "green" : 
           temp > 20 && temp <= 30 ? "yellow" : "red";
}

// init the dataset dimension
function setDataset(btnId, dx, dy){
  let btn = document.getElementById(btnId);
  btn.dataset.dx = dx;
  btn.dataset.dy = dy;
  btn.addEventListener("click", handleClick);

  return btn;
}

// reset the circle postion 
function resetCirclePosition(){
  piece.el.style.left = `${windowWidth / 2}px`;
  piece.el.style.top = "100px";
}

// set the circle on random position
function randomPosition(){
  piece.el.style.left = `${Math.floor(Math.random() * (windowWidth - widthCircleSize))}px`;
  piece.el.style.top = `${Math.floor(Math.random() * (windowHeight - heightCircleSize))}px`;
}

const pieceHTML = document.getElementById("piece");
pieceHTML.addEventListener("mouseover", hollow);
pieceHTML.addEventListener("mouseout", hollow);

// only the border should be drawn with the color of the piece
function hollow(){
  pieceHTML.style.backgroundColor == "white" ? pieceHTML.style.backgroundColor = "blue" : pieceHTML.style.backgroundColor = "white";
  pieceHTML.style.borderColor == "blue" ? pieceHTML.style.borderColor = "white" : pieceHTML.style.borderColor = "blue";
}


window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
});

// reset the circle position
document.getElementById("btn-reset").addEventListener("click", resetCirclePosition);

// random position of the circle
document.getElementById("btn-random").addEventListener("click", randomPosition);