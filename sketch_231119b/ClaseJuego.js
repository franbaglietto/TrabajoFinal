class ClaseJuego {

   constructor() {
    this.pantalla = 0;
    this.b = new byf();
   this.m = new mini();
   this.fondo = loadImage('assets/cueva00.png');
  }
   
PantallaEstados(){
switch(this.pantalla){
  //Pantalla de inicio
 case 0:
  background(20);
  this.b.menuB();
 break;

case 1:
  background(150);
  this.b.mostrarBU("Siguiente");
break;

case 2:
  background(20);
  this.b.mostrarB2("Escuchar al hombre misterioso","Prender fuego las ratas");
break;
//final 1
case 3:
  background(20);
  this.b.mostrarBU("Volver al menu");
break;

case 4:
  background(20);
  this.b.mostrarB2("Aceptar la oferta","Rechazar la oferta");
break;

case 5:
  background(20);
  this.b.mostrarBU("Siguiente");
break;
//tres caminos 1
case 6:
  background(20);
  this.b.mostrarC("A","B","C","Pagar y \n no aceptarlo","No pagar y \n no aceptarlo","Pagar y \n aceptarlo");
break;

case 7:
  background(20);
  this.b.mostrarBU("Siguiente");
break;
//bucle 
case 8:
  background(20);
  this.b.mostrarBU("Siguiente")
break;
//final3
case 9:
  background(20);
  this.b.mostrarBU("Volver al menu");
break;
//bucle 2
case 10:
  background(20);
  this.b.mostrarB2("Darle mas dinero","Mandar al pueblo a enferentarlo");
break;
//final 4
case 11:
  background(20);
break;
//Aca sigue la historia, no pagar ni aceptar
case 12:
  background(20);
  this.b.mostrarC("A","B","C","Seguir al \n flautista","Hacer bailes \n del fortnite","Hablar con \n el flautista")
break;
//final 5
case 13:
  background(20);
  this.b.mostrarBU("Volver al menu");
break;
//final 6
case 14:
  background(20);
  this.b.mostrarBU("Volver al menu");
break;
//Seguir al flautista
case 15:
  background(20);
  this.b.mostrarB2("Seguirlo","Volver al pueblo");
break;
//mini juego
case 16:
  background(20);
  this.b.mostrarBU("Jugar")
break;

//meter al minijuego
case 17:
 image(this.fondo, 0, 0);
  this.m.contador(this.pantalla); // Corregir llamada al método contador
  this.m.actualizarM();
////termina mini
  break;

//perder y reiniciar
case 18:
background(20);
this.b.mostrarBU("Volver a intentar");
break;
//seguir con la historia
case 19:
break;
//volver al pueblo final 7
case 20:
  background(20);
  this.b.mostrarBU("Volver al menu");
break;
//Final bueno
case 21:
background(20);
  this.b.mostrarBU("Volver al menu");
break;
}
}


///mostrar imagenes

///eventos de mouse o teclado
botonUno(mx,my){
  //1 solo boton
  if(this.pantalla==1 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=2;
  }
  else if (this.pantalla==3 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
  else if (this.pantalla==5 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=6;
  }
  else if (this.pantalla==8 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=10;
  }
  else if (this.pantalla==9 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
  else if (this.pantalla==7 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=12;
  }
  else if (this.pantalla==16 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=17;
  }
  else if (this.pantalla==20 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
  else if (this.pantalla==18 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=16;
  }
}
//menu
menu(mx,my){
  if(this.pantalla==0 && mx>150 && mx<450 && my>200 && my<250){ 
    this.pantalla=1;
}
}
//2 botones
//izq
botonDos1(mx, my) {
  if (this.pantalla == 2 && mx > 25 && mx < 273 && my > 490 && my < 564) {
    this.pantalla = 3;
  }
  else if (this.pantalla == 4 && mx > 25 && mx < 273 && my > 490 && my < 564) {
    this.pantalla = 3;
  }
  else if (this.pantalla == 10 && mx > 25 && mx < 273 && my > 490 && my < 564) {
    this.pantalla = 11;
  }
  else if (this.pantalla == 15 && mx > 25 && mx < 273 && my > 490 && my < 564) {
    //volver al pueblo
    this.pantalla = 20;
  }
}
//drc
botonDos2(mx,my){
  if(this.pantalla==2 && mx>311 && mx<558 && my>490 && my<564){
    this.pantalla=4;
  }
  else if(this.pantalla==4 && mx>311 && mx<558 && my>490 && my<564){
    this.pantalla=5;
  }
  else if(this.pantalla==10 && mx>311 && mx<558 && my>490 && my<564){
    this.pantalla=8;
  }
  else if(this.pantalla==15 && mx>311 && mx<558 && my>490 && my<564){
    this.pantalla=16;
  }
}

//botones circulares
botonTres(mx,my){
  if(this.pantalla==6 && dist(mx,my,150,500)<=50){
    this.pantalla=7;
  }
  else if(this.pantalla==6 && dist(mx,my,300,500)<=50){
    this.pantalla=8;
  }
  else if(this.pantalla==6 && dist(mx,my,450,500)<=50){
    this.pantalla=9;
  }
  //Segunda vez que lo llamo

  if(this.pantalla==12 && dist(mx,my,150,500)<=50){
    this.pantalla=13;
  }
  else if(this.pantalla==12 && dist(mx,my,300,500)<=50){
    this.pantalla=14;
  }
  else if(this.pantalla==12 && dist(mx,my,450,500)<=50){
    this.pantalla=15;
  }
}
//TECLAS
teclas() {
  this.p.moverPersonaje(keyCode, LEFT_ARROW, RIGHT_ARROW);
}

////final de la clase
}
