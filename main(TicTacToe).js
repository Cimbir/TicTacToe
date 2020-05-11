let gameButton = document.querySelectorAll(".gameButton");
let IsOActive = true;
let numbersClicked = 0;

let OPoints = 0;
let XPoints = 0;

for(let i = 0; i < gameButton.length; i++){
    gameButton[i].addEventListener("click", function(){
        let gameText = "O";
        if(!IsOActive){
            gameText = "X";
        }
        if(gameButton[i].innerHTML == ""){
            gameButton[i].innerHTML += gameText;
            IsOActive = !IsOActive;
        }
        console.log(i);
        console.log(gameButton[i].textContent);

        numbersClicked++;
        if(numbersClicked >= 5){
            CheckWinner();
        }

    })
}

function CheckWinner(){
    if(gameButton[0].textContent == gameButton[1].textContent && 
        gameButton[1].textContent == gameButton[2].textContent){
            if(gameButton[0].textContent != ""){
                GetWinner(gameButton[0].textContent);
            }
    }
    if(gameButton[3].textContent == gameButton[4].textContent && 
        gameButton[4].textContent == gameButton[5].textContent){
            if(gameButton[3].textContent != ""){
                GetWinner(gameButton[3].textContent);
            }
    }
    if(gameButton[6].textContent == gameButton[7].textContent && 
        gameButton[7].textContent == gameButton[8].textContent){
            if(gameButton[6].textContent != ""){
                GetWinner(gameButton[6].textContent);
            }
    }
    if(gameButton[0].textContent == gameButton[3].textContent && 
        gameButton[3].textContent == gameButton[6].textContent){
            if(gameButton[0].textContent != ""){
                GetWinner(gameButton[0].textContent);
            }
    }
    if(gameButton[1].textContent == gameButton[4].textContent && 
        gameButton[4].textContent == gameButton[7].textContent){
            if(gameButton[1].textContent != ""){
                GetWinner(gameButton[1].textContent);
            }
    }
    if(gameButton[2].textContent == gameButton[5].textContent && 
        gameButton[5].textContent == gameButton[8].textContent){
            if(gameButton[2].textContent != ""){
                GetWinner(gameButton[2].textContent);
            }
    }    
    if(gameButton[0].textContent == gameButton[4].textContent && 
        gameButton[4].textContent == gameButton[8].textContent){
            if(gameButton[0].textContent != ""){
                GetWinner(gameButton[0].textContent);
            }
    }    
    if(gameButton[2].textContent == gameButton[4].textContent && 
        gameButton[4].textContent == gameButton[6].textContent){
            if(gameButton[2].textContent != ""){
                GetWinner(gameButton[2].textContent);
            }
    }
}

function GetWinner(OorX){
    alert(OorX +" Won");
    if(O0rX == "O"){
        OPoints++;
    }
    else{
        XPoints++;
    }
    for(var i = 0; i < gameButton.length; i++){
        gameButton[i].textContent == "";
    }
}