// function Mado (){
//     document.body.innerHTML = "<p> Hello  </p>";
//     document.body.style.backgroundColor = 'red';    
//document.body.style.padding = '40%';
// }

function multiply (){
   const number01Value = document.querySelector('#number01').value;
   const number02Value = document.querySelector('#number02').value;

   const results =  number01Value * number02Value ;
   document.querySelector('.results').innerHTML = results;
   
}

function add (){
   const number01Value = Number(document.querySelector('#number01').value);
   const number02Value = Number(document.querySelector('#number02').value);

   const results =  number01Value + number02Value ;
   document.querySelector('.results').innerHTML = results;   
}

function subtract (){
   const number01Value = document.querySelector('#number01').value;
   const number02Value = document.querySelector('#number02').value;

   const results =  number01Value - number02Value ;
   document.querySelector('.results').innerHTML = results;
   
}

function  divide (){
   const number01Value = document.querySelector('#number01').value;
   const number02Value = document.querySelector('#number02').value;

   const results =  number01Value / number02Value ;
   document.querySelector('.results').innerHTML = results;
   
} 

function  presnt (){
   const number01Value = document.querySelector('#number01').value;
   const number02Value = document.querySelector('#number02').value;

   const results =  number01Value % number02Value ;
   document.querySelector('.results').innerHTML = results;
   
} 

function enter (){
   const elemnt = document.querySelector('.results');
   elemnt.style.border = '3px  rgb(178, 137, 143) solid';
}

function leave() {
   const elemnt = document.querySelector('.results');
   elemnt.style.border = '3px  rgb(223, 153, 163) solid';
}


   