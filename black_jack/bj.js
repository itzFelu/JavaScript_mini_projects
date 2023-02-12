let flag=0,bj=0,sum=0;
let cards=[];
let tData1=0,tData2=0;
let player={
    name:"",
    score:""
};
let dialouge=document.getElementById("dialouge-el");
let cardShow=document.getElementById("cards-el");
let sumEl=document.getElementById("sum-el");
let start=document.getElementById("start-butt");
let newCard=document.getElementById("newCard-butt");
let score=document.getElementById("score-el");

start.addEventListener("click",startGame);
newCard.addEventListener("click",dragCard);

function getRandomCard(){
    let temp= Math.floor(Math.random()*13)+1;
    if(temp>10)
        return 11;
    // else if(temp==1)
    //     return 11;
    else
        return temp;
}
function dragCard(){
    if(flag===0)
        return;
    cards.push(getRandomCard());
    cardShow.innerHTML="Cards: "+cards;
    sum+=cards[cards.length-1];
    sumEl.innerHTML="Sum: "+sum;
    if(sum==21){
        bj=1;
        dialouge.innerHTML="Bingo!! sum=21,Got the black jack";
        player.score+=20;
        tData2.innerHTML=player.score;
        flag=0;
    }
    else if(sum>21){
        bj=1;
        dialouge.innerHTML="Oops!! sum>21, GAME OVER...";
        player.score+=5;
        tData2.innerHTML=player.score;
        flag=0;
    }
    else{
        dialouge.innerHTML="Drag Next Card";
        player.score+=5;
        tData2.innerHTML=player.score;
    }
}
function getInput(){
    player.name=prompt("enter your name");
    player.score=0;
}
function updateTable(){
    tData1.innerHTML=player.name;
    tData2.innerHTML=player.score;
}
function startGame(){
    if(flag===1 || bj===1){
        if( bj===1 || confirm("are you sure??")){
            dialouge.innerHTML="want to play a round?"
            dialouge.style.color="white";
            dialouge.style.fontStyle="normal";
            cardShow.innerHTML="Card: ";
            sumEl.innerHTML="Sum: ";
            start.innerHTML="START GAME";
            start.style.color="black";
            start.style.fontStyle="normal";
            flag=0;
            sum=0;
            bj=0;
            cards=[];
        }
        return;
    }
    let tRow=document.createElement("tr");
    tData1=document.createElement("td");
    tData2=document.createElement("td");
    getInput();
    if(player.name==="" || player.name===null)
        return;
    flag=1;
    tRow.appendChild(tData1);
    tRow.appendChild(tData2);
    score.appendChild(tRow);
    updateTable();
    dialouge.innerHTML="--pick the first card--";
    start.innerHTML="QUIT";
    start.style.color="red";
    dialouge.style.color="rgb(141, 15, 15)";
    dialouge.style.fontStyle="italic";
}





