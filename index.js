class Perro {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza   = raza;
    this.edad   = edad;
  }

  presentarse() {
    console.log(`Hola, soy ${this.nombre}, un ${this.raza} y tengo ${this.edad} años`);
  }

  ladrar() {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }

  cumplirAnios() {
    this.edad++;
    console.log(`¡Felicidades ${this.nombre}! Ahora tienes ${this.edad} años`);
  }
}


class PerroGuia extends Perro {
  constructor(nombre, edad, dueno) {
    super(nombre, 'Labrador', edad);
    this.dueno = dueno;
  }

  ladrar() {
    console.log(`${this.nombre} ladra suavemente... cuida a ${this.dueno}`);
  }

  guiar() {
    console.log(`${this.nombre} está guiando a ${this.dueno} con cuidado`);
  }
}

class PerroPolicial extends Perro {
  constructor(nombre, edad, rango) {
    super(nombre, 'Pastor Alemán', edad);
    this.rango = rango;
  }

  ladrar() {
    console.log(`${this.nombre} [${this.rango}]: ¡GUAU GUAU! ¡Alto ahí!`);
  }

  patrullar() {
    console.log(`${this.nombre} está patrullando el área`);
  }
}

const bobby = new Perro('Bobby', 'Salchicha', 3);
const luna  = new PerroGuia('Luna', 4, 'Don Carlos');
const rex   = new PerroPolicial('Rex', 6, 'Sargento');


bobby.presentarse();
bobby.ladrar();   
bobby.cumplirAnios();

luna.presentarse();
luna.ladrar();      
luna.guiar();

rex.presentarse();
rex.ladrar();   
rex.patrullar();

