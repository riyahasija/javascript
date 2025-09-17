let choices=["Rock","Scissors","Paper"];
var score =0
var count=0

function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    return  choices[x];
}

function decisionMaking(value){
    let computer= getComputerChoice();
    console.log("Computer chose: "+computer);
    console.log("You chose: "+value);
    if(value == computer){
        console.log("It's a draw");
        count++;
    }
    else if((computer == "Rock" && value == "Paper") || (computer == "Paper" && value =="Scissors") || (computer =="Scissors" && value =="Rock")){
        console.log("You win!");
        score++;
        count++;
    }
    else{
        console.log("Computer wins");
        count++;
    }
    if(count==5){
        
        if(score<3){
            console.log("Score: "+score+"You lose, try again!");
        }
        else{
            console.log("Score: "+score+"You win, play again!");
        }
        score = 0;
        count = 0;
    }
}