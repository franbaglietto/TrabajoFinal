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
}
 
