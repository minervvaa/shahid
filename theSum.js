function add (){

let x = Number(document.querySelectorAll('input')[0].value);
let y = Number(document.querySelectorAll('input')[1].value);
let z = Number(document.querySelectorAll('input')[2].value);
let e = Number(document.querySelectorAll('input')[3].value);

const adding = x + y + z + e;

console.log (`Sum of all numbers is ${adding}`)
 
}