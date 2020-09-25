window.onload=function(){
    document.getElementById("check").addEventListener("click",playGame);
    document.getElementById("restart").addEventListener("click",initGame);
}

let correctNumber = getRandomNumber();
let myGuess=[];

function playGame(){
    let number=document.getElementById("myInput").value;
    compare(number);
    saveHistory(number);
    displayHistory();
}

function initGame(){
    correctNumber=getRandomNumber();
    document.getElementById("myResult").innerHTML="";
    myGuess=[];
    displayHistory();
}

function getRandomNumber(){
    return Math.floor(Math.random()*100+1);
}

function compare(number){
    if(number>correctNumber){
        showHigh();
    }
    else if(number<correctNumber){
        showLow();
    }
    else{
        showWon();
    }
}

function getDialog(dialogType,text){
    let dialog;
    switch(dialogType){
        case "won":
            dialog="<div class='alert alert-success' role='alert'>";
            break;
        case "warning":
            dialog="<div class='alert alert-warning' role='alert'>";
            break;
    }
    dialog+=text;
    dialog+= "</div>";
    return dialog;
}

function showWon(){    
    const text= "Well done! Your guess is right"; 
    let dialog=getDialog("won",text);
    document.getElementById("myResult").innerHTML=dialog;
}

function showLow(){
    const text= "Oops your guess is too low";
    let dialog=getDialog("warning",text);
    document.getElementById("myResult").innerHTML=dialog;
}

function showHigh(){    
    const text="Oops your guess is too high";
    let dialog=getDialog("warning",text);
    document.getElementById("myResult").innerHTML=dialog;
}

function saveHistory(guess){
    myGuess.push(guess);
}

function displayHistory(){
    let index=myGuess.length-1;
    let list="<ul class='list-group'>";
    while(index>=0){
        list+="<li class='list-group-item'>"+"You guessed "+
        myGuess[index]+"</li>";
        index--;
    }
    list+="</ul>";
    document.getElementById("history").innerHTML=list;
}

window.addEventListener("keypress",function(e){
    if(e.keyCode==13){
        playGame();
    }
})