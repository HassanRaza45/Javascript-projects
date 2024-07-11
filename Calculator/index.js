let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
//empty string for store result
let string="";
//we want all buttons
//this line will make us array of buttons
let arr=Array.from(buttons);
//we make a for each in which we add event listner when button click
arr.forEach(button =>{
button.addEventListener('click',(e)=>{
if(e.target.innerHTML=='='){
    string=eval(string);//evaluet mathematically
    input.value=string;
}
else if(e.target.innerHTML=='AC'){
    string="";
    input.value=string;
}
else if (e.target.innerHTML=='DEL'){
    string=string.substring(0,string.length-1);
    input.value=string;

}
else{
    string +=e.target.innerHTML; //numbers add till 
    input.value=string;
    
}
})
});