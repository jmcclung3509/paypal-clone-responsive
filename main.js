
window.onload = increment;

const counter1=document.getElementById("counter-1");

let seconds=4000000;



function increment(){
    seconds +=1;
    counter1.innerText =seconds 

}



let counterValue = setInterval(increment, 1000);

  
