function len() {
    // console.log(xAstring[8]); // notcorrect
    let x = Number(document.querySelector('input').value);

    let xAstring = String(x);
    let xlength = xAstring.length;

    let this1 = (xAstring[xlength - 1]);
    let this2 = (xAstring[xlength - 2]);

    console.log(this1);
    console.log(this2);

}

function twoNum() {
    let x = Number(document.querySelector('input').value);

    let t1 = x % 10; // right digit 
    let t2 = (x - t1) / 10 // left digit;

    console.log(t1 + t2);
}


// let c = true;

if (7) console.log('Today is good ');
if (0) console.log('Today is`t good ');


let x;

x = true;
x = false;
x = 0; // false
x = "0"; // true
x = "shaihd"; // true
x = ""; // false
x = null; // false
x = NaN; // false
x = undefined // false

let y;
y = false
x = true

// OR ==>  ||

let mado = y || x;

let res;
res = true || false; // true 
res = true || true; // true
res = false || false; // true
res = false || false; // false

// if (mado) console.log('res is true');


// if (x) console.log('');


// AND  ==> 
res = true && false; // false 
res = true && true; // true
res = false && false; // false
res = false && false; // false

//NOT ==> !
res = !true; // false
res = !false; // true

res = !NaN; // true
res = !null && 50; // true
res = !null || undefined; // true
res = !null && undefined; // false


// compaerison operators 
x = 5;
y = 6;
res = x == y; // False

x = '7';
y = 7;
res = x == y; // True
res = x === y; // False equal in value & type.
res = x && y; // True
res = !(x === y) // True
res = x !== y; // True


x = 5;
res = x === 5; // True
res = x > 5; // Flase
res = x >= 5; // True
res = x < 5; // False
res = x <= 5; // True

x = true;
y = false;

x || y; // true
x && y; // false
!x ;    // false
(!x) || y; // false
x && (!y); // true


if (res) console.log('True');
if (!res) console.log('Fales');

// Conditions ! 

x = true; 

if (x){
    console,log('x is true' )
    // some more code
}; 

 // or
 
 if (x) console.log('x is true');


 //======================

 if (x){
    console.log(x)
 } else {
    console.log("not x")
 }

  //======================
//short version for if (teranry oprator)
  x = false;
  x ? console.log('x is true')  : console.log('x is false');
 
