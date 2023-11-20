class ClaseJuego {

   constructor() {
    this.pantalla = 0;
    this.b = new byf();
    
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
  this.b.mostrarBU();
break;

case 2:
  background(20);
break;

case 3:
break;

case 4:
break;

case 5:
break;

case 6:
break;

case 7:
break;

case 8:
break;

case 9:
break;

case 10:
break;

case 11:
break;

case 12:
break;

case 13:
break;

case 14:
break;

case 15:
break;
case 16:
break;
case 17:
break;
case 18:
break;
case 19:
break;
case 20:
break;
case 21:
break;
}
}
///eventos de mouse o teclado
botonUno(mx,my){
  //1 solo boton
  if(this.pantalla==1 && mx>50 && mx<550 && my>490 && my<560){ 
    this.pantalla=2;
  }
}
//menu
menu(mx,my){
  if(this.pantalla==0 && mx>150 && mx<450 && my>200 && my<250){ 
    this.pantalla=1;
}
}
////final de la clase
}
