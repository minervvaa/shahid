function cale() {
    let x = document.querySelector('#in').value;
    x = Number(x);
 
    //calculate days:

    //lets say x = 16
    const days = x % 7; // 2

    //calculate weeks:
    //firsts lets find the num of the even weeks  
    const daysOfWeeks = x - days; // 14 
    const weeks = daysOfWeeks / 7;

    // print the results
    console.log('days:', days);
    console.log('weeks:', weeks);
    
}
