function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);
}

function printM(x, y) {
  line(x, y, x, y+80)
  line(x, y, x+20, y+65)
  line(x+20, y+65, x+40, y)
  line(x+40, y, x+40, y+80)
}

function printY(x, y){
  line(x, y, x+20, y+30)
  line(x+40, y, x+20, y+30)
  line(x+20, y+30, x+20, y+80)
}

function printB(x, y) {
  line(x, y, x+20, y)
  line(x, y, x, y+80)
  line(x+30, y+10, x+30, y+30)
  line(x+30, y+30, x+20, y+40)
  line(x+20, y, x+30, y+10)
  line(x, y+40, x+30, y+40)
  line(x+30, y+40, x+40, y+50)
  line(x+40, y+50, x+40, y+80)
  line(x, y+80, x+40, y+80)
}

function printO(x, y) {
  line(x, y, x+40, y)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
  line(x+40, y, x+40, y+80)
}

function printD(x, y) {
  line(x, y, x+30, y)
  line(x+30, y, x+40, y+15)
  line(x+40, y+15, x+40, y+80)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
}

function printI(x, y) {
  line(x, y, x+40, y)
  line(x+20, y, x+20, y+80)
  line(x, y+80, x+40, y+80)
}

function printS(x, y){
  line(x, y, x+40, y)
  line(x, y, x, y+40)
  line(x, y+40, x+40, y+40)
  line(x+40, y+40, x+40, y+80)
  line(x, y+80, x+40, y+80)
}

function printA(x, y) {
  line(x, y, x-20, y+80)
  line(x, y, x+20, y+80)
  line(x-10, y+40, x+10, y+40);
}

function printC(x, y) {
  line(x, y, x+40, y)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
}

function printN(x, y) {
  line(x, y, x, y+80)
  line(x, y, x+40, y+80)
  line(x+40, y, x+40, y+80)
}

function printT(x, y) {
  line(x, y, x+40, y)
  line(x+20, y, x+20, y+80)
}

function printE(x, y) {
  line(x, y, x+40, y)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
  line(x, y+40, x+40, y+40)
}

function printR(x, y){
  line(x, y, x+40, y)
  line(x+40, y, x+40, y+40)
  line(x, y, x, y+80)
  line(x, y+40, x+40, y+40)
  line(x, y+40, x+40, y+80)
}

function draw() {
  background(220);
  printM(50, 50);
  printY(100, 50);
  printB(200, 50);
  printO(250, 50);
  printD(300, 50);
  printY(350, 50);
  printI(100, 150);
  printS(150, 150);
  printA(300, 150);
  printC(50, 250);
  printO(100, 250);
  printN(150, 250);
  printT(200, 250);
  printA(260, 250);
  printI(290, 250);
  printN(340, 250);
  printE(390, 250);
  printR(440, 250);
}
