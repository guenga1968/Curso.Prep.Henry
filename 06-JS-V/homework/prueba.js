class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio
    }
    detalle() {
      return {Nombre: this.nombre, Apellido: this.apellido, Edad: this.edad , Domicilio: this.domicilio}
    }
}
let pedro = new Persona('Pedro', 'Perez', 22, 'Saavedra 123');
console.log(pedro.detalle());