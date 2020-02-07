function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);
}

function printA(x, y) {
  line(x, y, x-20, y+80)
  line(x, y, x+20, y+80)
  line(x-10, y+40, x+10, y+40);
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

function printC(x, y) {
  line(x, y, x+40, y)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
}
    
function printD(x, y) {
  line(x, y, x+30, y)
  line(x+30, y, x+40, y+15)
  line(x+40, y+15, x+40, y+80)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
}

function printE(x, y) {
  line(x, y, x+40, y)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
  line(x, y+40, x+40, y+40)
}

function printF(x, y) {
  line(x, y, x+40, y)
  line(x, y, x, y+80)
  line(x, y+40, x+40, y+40)
}

function printG(x, y) {
  line(x, y, x+40, y)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
  line(x+25, y+55, x+40, y+55)
  line(x+40, y+55, x+40, y+80)
}

function printH(x, y) {
  line(x, y, x, y+80)
  line(x+40, y, x+40, y+80)
  line(x, y+40, x+40, y+40)
}

function printI(x, y) {
  line(x, y, x+40, y)
  line(x+20, y, x+20, y+80)
  line(x, y+80, x+40, y+80)
}

function printJ(x, y) {
  line(x, y, x+40, y)
  line(x+20, y, x+20, y+80)
  line(x+20, y+80, x, y+80)
  line(x, y+80, x, y+65)
}

function printK(x, y) {
  line(x, y, x, y+80)
  line(x, y+40, x+40, y)
  line(x, y+40, x+40, y+80)
}

function printL(x, y) {
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
}

function printM(x, y) {
  line(x, y, x, y+80)
  line(x, y, x+20, y+65)
  line(x+20, y+65, x+40, y)
  line(x+40, y, x+40, y+80)
}

function printN(x, y) {
  line(x, y, x, y+80)
  line(x, y, x+40, y+80)
  line(x+40, y, x+40, y+80)
}

function printO(x, y) {
  line(x, y, x+40, y)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
  line(x+40, y, x+40, y+80)
}

function printP(x, y){
  line(x, y, x+40, y)
  line(x+40, y, x+40, y+40)
  line(x, y, x, y+80)
  line(x, y+40, x+40, y+40)
}

function printQ(x, y) {
  line(x, y, x+40, y)
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
  line(x+40, y, x+40, y+80)
  line(x+40, y+80, x+25, y+55)
}

function printR(x, y){
  line(x, y, x+40, y)
  line(x+40, y, x+40, y+40)
  line(x, y, x, y+80)
  line(x, y+40, x+40, y+40)
  line(x, y+40, x+40, y+80)
}

function printS(x, y){
  line(x, y, x+40, y)
  line(x, y, x, y+40)
  line(x, y+40, x+40, y+40)
  line(x+40, y+40, x+40, y+80)
  line(x, y+80, x+40, y+80)
}

function printT(x, y) {
  line(x, y, x+40, y)
  line(x+20, y, x+20, y+80)
}

function printU(x, y) {
  line(x, y, x, y+80)
  line(x, y+80, x+40, y+80)
  line(x+40, y, x+40, y+80)
}

function printV(x, y) {
  line(x, y, x+20, y+80)
  line(x+20, y+80, x+40, y)
}

function printW(x, y){
  line(x, y, x+10, y+80)
  line(x+10, y+80, x+20, y+20)
  line(x+20, y+20, x+30, y+80)
  line(x+30, y+80, x+40, y)
}

function printX(x, y){
  line(x, y, x+40, y+80)
  line(x+40, y, x, y+80)
}

function printY(x, y){
  line(x, y, x+20, y+30)
  line(x+40, y, x+20, y+30)
  line(x+20, y+30, x+20, y+80)
}

function printZ(x, y){
  line(x, y, x+40, y)
  line(x+40, y, x, y+80)
  line(x, y+80, x+40, y+80)
}

function draw() {
  background(220);
  printA(50, 50);
  printB(80, 50);
  printC(130, 50);
  printD(180, 50);
  printE(230, 50);
  printF(280, 50);
  printG(330, 50);
  printH(30, 150);
  printI(80, 150);
  printJ(130, 150);
  printK(180, 150);
  printL(230, 150);
  printM(280, 150);
  printN(330, 150);
  printO(30, 250);
  printP(80, 250);
  printQ(130, 250);
  printR(180, 250);
  printS(230, 250);
  printT(280, 250);
  printU(330, 250);
  printV(30, 350);
  printW(80, 350);
  printX(130, 350);
  printY(180, 350);
  printZ(230, 350);
}
