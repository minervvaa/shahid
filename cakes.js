function divideIt() {
    const x = Number(document.querySelector('input').value);
    

    // say x is 39
    // calculate the remains:

    const remain = x % 18;

    //calculate the "whole" donuts 
    const whole = x - remain; // 36 

    //calculate  the  results. number of whole donuts is
    const R1 = whole  / 18;

    const R2 = remain  / 18;
    console.log(R1 , R2);

    }