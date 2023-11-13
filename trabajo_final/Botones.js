class byf {
  constructor() {
    this.textos = [];
    this.f = 20;
    this.flautista = [];
  }

  tyi() {
    for (this.i = 0; this.i < this.f; this.i++) {
      this.flautista[this.i] = loadImage('Assets/imagenes' + this.i + '.jpg');
    }
  }
//BOTONES
botonUno(){
  //1 solo boton
  if(mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560){    
  }
}

//2 botones
botonDos(){
if(mouseX>25 && mouseX<273 && mouseY>490 && mouseY<564){
}
}

//3 botones
botonTres(){
  if(dist(mouseX,mouseY,150,550)<=50){
  }
}
 mostrarI(num) {
    image(this.flautista[num], 0, 0);
 }
} 
