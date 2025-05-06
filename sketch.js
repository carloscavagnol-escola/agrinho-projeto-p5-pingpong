// tamanho da raquete
let rectWidth = 10;
let rectHeight = 50;

// pontuações
let scoresP1 = 0
let scoresP2 = 0

// posição player 1
let xP1 = 10;
let yP1 = 10;

// posição player 2
let xP2 = 380;
let yP2 = 10;

// posição da bola
let xBall = 200;
let yBall = 200;

// variaveis player
var player1;
var player2;

// variaveis relacionadas a bola
var ball;
var ballXSpeed = 5;
var ballYSpeed = 4;

// inicia a tela
function setup() {
  createCanvas(400, 400);
}

// controla o movimento do player1 com as teclas W e S.
function P1Movement() {
    if (keyIsDown(87)) {
        if (yP1 > 10) {
          yP1 -= 5;
        }
    }
    if (keyIsDown(83)) {
        if (yP1 < 340) {
          yP1 += 5;
        }
  }
}
// controla o movimento do player 2 com as setas cima e baixo.
function P2Movement() {
    if (keyIsDown(UP_ARROW)) {
        if (yP2 > 10) {
          yP2 -= 5;
        }
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (yP2 < 340) {
          yP2 += 5;
        }
  }
}

// controla o movimento da bola baseado nas velocidades definidas.
function ballMovement(){
  xBall += ballXSpeed;
  yBall += ballYSpeed;
  
  // pontua para o player 2
  if (xBall < 0){
    xBall = 200;
    yBall = 200;
    scoresP2 += 1
    
    console.log("P2 Pontos:" + scoresP2)
  }
    
  // pontua para o player 1
  if (xBall > width){
    xBall = 200;
    yBall = 200;
    scoresP1 += 1
    
    console.log("P1 Pontos:" + scoresP1)
  }

  // faz a bola rebater nas bordas de cima e baixo
  if (yBall < 0  || yBall > height) {
    ballYSpeed *= -1;
  }
  
  // faz a bola rebater na raquete do player2 (vertical)
  if (xBall + 10 > xP2 && 
      xBall < xP2 + rectWidth && 
      yBall + 10 + ballYSpeed > yP2 && yBall + ballYSpeed <               yP2 + 50) {
      
      ballYSpeed *= -1;
  }
  
  
  // faz a bola rebater na raquete do player 1 (vertical)
  if (xBall + 10 > xP1 && 
      xBall < xP1 + rectWidth && 
      yBall + 10 + ballYSpeed > yP1 && yBall + ballYSpeed <               yP1 + 50) {
      
      ballYSpeed *= -1;
  }
  
  // faz a bola rebater na raquete do player 1 (horizontal)
  if (xBall + 10 + ballXSpeed > xP1 && 
      xBall + ballXSpeed < xP1 + rectWidth && 
      yBall + 10 > yP1 && 
      yBall < yP1 + rectHeight) {
    
      ballXSpeed *= -1;
  }
  
  // faz a bola rebater na raquete do player 2 (horizontal)
    if (xBall + 10 + ballXSpeed > xP2 && 
      xBall + ballXSpeed < xP2 + rectWidth && 
      yBall + 10 > yP2 && 
      yBall < yP2 + rectHeight) {
      
      ballXSpeed *= -1;
  }
}

// atualiza a tela
function draw() {
  background(0);
  
  player1 = rect(xP1,yP1,rectWidth,rectHeight);
  player2 = rect(xP2,yP2,rectWidth,rectHeight);
  
  ball = rect(xBall, yBall, 10, 10)
  
  P1Movement()
  P2Movement()
  ballMovement()
}