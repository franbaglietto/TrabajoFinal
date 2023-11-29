class mini{
  constructor() {
    this.contador = 3600;
    this.puntos = 0;
    this.m = new Piedras();
    this.p = new Personaje();
  }
  
contador(pantalla){
 
  fill(255);
  //contador
  if (this.contador <= 3600) {
    this.contador--;
    if (this.contador === 0) {
      if (this.puntos >= 45) {
        pantalla = 21; // Pantalla ganadora, reiniciar
        this.contador=3600;
      } else {
        pantalla = 18; // Pantalla perdedora, reiniciar
         this.contador=3600;
      }
    }
  }
  this.minutos = floor(this.contador / 60);
  this.segundos = this.contador % 60;
  textSize(50);
  text(this.minutos + ":" + nf(this.segundos, 2), 250, 100);
  text("puntos:" + this.puntos, 200, 150);
  
  
  
  ///
}
actualizarM() {
        this.p.moverPersonaje();  // Mueve al personaje en cada fotograma
        this.p.dibujarPersonaje();  // Dibuja al personaje en cada fotograma

        this.m.piedrasCayendo();  // Hace caer las piedras
        // Verificar colisión
        if (this.m.colision(this.p)) {
            this.puntos++;
        }
      
    }
}
