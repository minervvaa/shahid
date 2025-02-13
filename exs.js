/// EX04

let x = 17 ;

if ( x > 10){
    console.log(x);
};
 
// didnt work
if ( 20 < x > 10){
    console.log(x);
};

// this wored
if ((x > 10) && (x < 20) ){
    console.log(x);
};

if (!(x%2)){
    console.log('Even');
};

/// EX05

// option A ( without else)

let a = 7;
let b = 9;

if ( a < b ){
    console.loga(a);
};

if ( a > b ){
    console.log(b);
};

// option B ( with else)

if ( a < b ){
    console.loga(a);
} else {
    console.log(b);
}

///EX06

let y = 6;
let c = 2;

if ( c < ( y * 0.5 ) ){
    console.log('Yes');
} else {
    console.log('No');
}


///07
 let s = 'shahid';

let res
if (typeof(s) === Number){
    res = 'x is a number';
} else {
    res = 'NaN';
}

// with the ternary operator

let res01 = typeof(s) === Number ? "x is a number" : "NaN";