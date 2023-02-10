function increment(){
    count++;
    countNum.innerHTML=count;
}
function decrement(){
    if(count>0){
        count--;
        countNum.innerHTML=count;
    }
}
function checks(){
    saveLog.innerHTML=count+"";
}
function refresh(){
    if(confirm("sure you want to reset?")){
        count=0;
        countNum.innerHTML=count;
        saveLog.innerHTML="";
    }
}
// count initialisation
let count=0;
// countNum object modifies the count in HTML doc
let countNum=document.getElementById("count-num");
// saveLog saves the current status of the count
let saveLog=document.getElementById("saves-el");
//objects for buttons
let incre=document.getElementById("incre-el");
let decre=document.getElementById("decre-el");
let save=document.getElementById("save-el");
let reset=document.getElementById("reset-el");
// main clicking code
decre.addEventListener("click",decrement);
incre.addEventListener("click",increment);
save.addEventListener("click",checks);
reset.addEventListener("click",refresh);
