//Recorta una cadena
//Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). 
//Devuelve la cadena recortada con un ... al final


function truncateString(str, num) {
    let newArr = []; //preparo un array vacio para almacenar los nuevos datos
    let caracters = str.split(""); //Divido por caracteres

    for (let i = 0 ; i < num; i++){
        newArr.push(caracters[i]); //Voy colocando los caracteres hasta el "NUM" indicado
    }

    newArr = newArr.join("");//Junto todos los caracteres para formar un string

    if (num < str.length) {  //Si se recorta bastante el string se agrega "..." indicando que continua la frase
        newArr = newArr + "..."
    }
    return newArr;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));