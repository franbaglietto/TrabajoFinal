class byf {
  constructor() {
    this.textos = [];
    this.f = 20;
    this.flautista = [];
    this.drc=50;
    this.izq=490;
    this.down=500;
  }

 
//BOTONES
//mostrar boton 1
mostrarBU(){
  fill(255);  
  rect(this.drc,this.izq,this.down,75);
  fill(20);
textSize(40);
text("Siguiente",205,540);
}
//mostrar 2 botones
botonDos(){
  if(mouseX>25 && mouseX<273 && mouseY>490 && mouseY<564){
}
}

//mostrar 3 botones
botonTres(){
  if(dist(mouseX,mouseY,150,550)<=50){
  }
}
menuB(){
  textSize(50);
  rect(150, 200, 300, 60);
  fill(20);
  text("Jugar", 240, 245);
  fill(255);
  rect(150, 300, 300, 60);
  fill(20);
  text("Creditos", 210, 345);
  fill(255);
}
}
