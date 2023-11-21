let c;
function setup() {
  c = new ClaseJuego();
  createCanvas(600, 600);
  
}

function draw() {
  c.PantallaEstados();
}
function mousePressed(){
c.menu(mouseX,mouseY);
c.botonUno(mouseX,mouseY);
c.botonDos1(mouseX,mouseY);
c.botonDos2(mouseX,mouseY);
c.botonTres(mouseX,mouseY);
}
function keyPressed(){
c.teclas();
}
