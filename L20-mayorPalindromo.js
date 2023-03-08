export function findLargestPalindrome(words) {
  let maxL = 0,
    ans = null;
  words.forEach((w) => {
    if (w == w.split("").reverse().join("") && w.length > maxL) {
      ans = w;
      maxL = w.length;
    }
  });
  return ans;
}

/*
Hola. Comparto mi solución al ejercicio
.
.
.
.
Consiste en
.
.
.
.
.
La creación de una variable para referencia del máximo y otra para ir ubicando 
la respuesta final. Luego un loop que recorre el arreglo de words y para 
cada ‘w’ revisa si es palíndroma y si su longitud es superior al máximo 
registrado, en dado caso actualiza los valores. Para invertir la palabra, la 
convierto en arreglo con split(), invierto el arreglo con reverse() y junto 
las letras con join()
*/
