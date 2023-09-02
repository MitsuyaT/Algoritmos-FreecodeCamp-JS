//ENUNCIADO
//Repite una cadena repite una cadena
//Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). 
//Devuelve una cadena vacía si num no es un número positivo. 
//Para este desafío, no utilices el método incorporado .repeat().


function repeatStringNumTimes(str, num) {
    //funcionamiento normal
    let i = 1;
    let acc = str;
  
    if (num > 0) { //verificar que num sea mayor a 0
      while (i < num) {
        acc = acc + str;
        i++;
      }
    } else { // si no lo es, devuelve un string vacio
      acc = "";
    }
  
    return acc;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  