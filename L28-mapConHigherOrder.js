let a = [
    {name: "michi", age: 2},
    {name: "firulais", age: 6}]

let fun = (pet) => pet.name

// function myMap(a, fun) {
//     return a.map(fun)
// }

// let myMap = (a, fun) => a.map(fun)

// function myMap(array, func) {
//     for (let i = 0; i < array.length; i++) array[i] = func(array[i]);
//     return [...array];
// }

export function myMap(array, func) {
    let ans = []
    for (let i of array) ans.push(func(i));
    return ans;
}

console.log(myMap(a,fun))
console.log(a)
  


