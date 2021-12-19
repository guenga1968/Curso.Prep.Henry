// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  nuevoArreglo = [];
  for (var i in objeto) {
    nuevoArreglo.push([i, objeto[i]]);
  }
  return nuevoArreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var newObjeto = {};
  for (i = 0; i < string.length; i++) {
      if(string.includes(string[i])){
          newObjeto[string[i]] = newObjeto[string[i]] + 1 ||1;
      };
    };
    return newObjeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  // Comentario la consigna es que mueva todas las letras mayúsculas al principio de la palabra, esta función cumple
  // con la consigna, pero me da error.
  for (i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      s = s.slice(i) + s.slice(0, i);
    };
  };
  return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nuevoArreglo = str.split(" ");
  for (i = 0; i < nuevoArreglo.length; i++) {
      nuevoArreglo[i] = nuevoArreglo[i].split("").reverse().join("");
} 
return str = nuevoArreglo.join(" ");

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    numero = numero.toString();
    var numeroInvertido = numero.split("").reverse().join("");
    if (numero === numeroInvertido) {
        return "Es capicua";
    } else {    
        return "No es capicua";
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevo = cadena.split("");
    for(i = 0; i < nuevo.length; i++){
        if(nuevo[i] == "a" || nuevo[i] == "b" || nuevo[i] == "c"){
            nuevo.splice(i,1);
            i--;
        };
    };
    return nuevo.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  return arr.sort(function (a, b) {
    return a.length - b.length;});
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
    arreglo1 = arreglo1.sort();
    arreglo2 = arreglo2.sort();
    var arreglo3 = [];
    var i = 0;
    var j = 0;
    while(i < arreglo1.length && j < arreglo2.length){
        if(arreglo1[i] < arreglo2[j]){
            i++;
        }else if(arreglo1[i] > arreglo2[j]){
            j++;
        }else{
            arreglo3.push(arreglo1[i]);
            i++;
            j++;
        }
    }
    return arreglo3; 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

