let palabrasCortas = ["agua", "sol", "pelota", "sal", "música","teclado","computadora","mouse"];
let sumarLetras;

function sumarPalabasCortas()
{
  for(var i in palabrasCortas)
  {
      if(palabrasCortas[i].length<6)
      {
        sumarLetras+= palabrasCortas[i].length;
      }
  }

  console.log("Total de letras sumadas en esas palabras: " + sumarLetras);
}

console.log(sumarPalabasCortas());