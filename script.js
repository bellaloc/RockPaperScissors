//variables

var choiceArray = ['R','P','S'];
var userChoice;
var computerChoice;
var wins;
var losses;
var tie

//prompt
function getPrompt(){
var userprompt = window.prompt ('Pick R, P, or S');
    //run the game

} 
if(userPrompt === 'R' || userPrompt === 'P' || userPrompt === 'S'){
    playgame();
}
if(userPrompt === 'r' || userPrompt === 'p' || userPrompt === 's'){
    playgame(); 

} 
else {
    alert('must pick R, P, or S. Please try again.')
    return false;
};

// run the game

function playgame()

//randomly chose R,P, or S for computer choice

computerChoice = choiceArray[Math.floor(math.random() * choiceArray.legnth)];

//run the game

function playgame(userChoice, computerChoice){
    if(userchoice === computerchoice){
        alert('Its a tie!');

    } else if (userchoice === 'R' && computerChoice === 'S'){
        alert('You Won')
    } else if (userchoice === 'S' && computerChoice === 'P'){
        alert('You Won')
    } else if (userchoice === 'P' && computerChoice === 'R'){
        alert('You Won');
    } else {
        alert('You lost');
    };

    };

    //determine if I won, lost, or tied
