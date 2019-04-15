// Initialize user and computer scores, set to 0
let userScore = 0;
let compScore = 0;

// Store DOM nodes that will be modified
let elUserScore = document.getElementById('userScore');
let elCompScore = document.getElementById('compScore');
let elUserPick = document.getElementById('userPick');
let elCompPick = document.getElementById('compPick');
let elOverallResult = document.getElementById('overallResult');

// Set up function to compare the user and computer choice.
let compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        console.log("It's a Tie.");
        return result = ["The result is a tie!", "tie"];
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            console.log("rock beats scissors");
            return result = ["rock wins", "user"];
        } else if (choice2 === "paper") {
            console.log("paper beats rock");
            return result = ["paper wins", "comp"];
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            console.log("paper beats rock");
            return result = ["paper wins", "user"];
        } else if (choice2 === "scissors") {
            console.log("scissors beats paper");
            return result = ["scissors win", "comp"];
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            console.log("rock beats scissors");
            return result = ["rock wins", "comp"];
        } else if (choice2 === "paper") {
            console.log("scissors beats paper");
            return result = ["scissors win", "user"];
        }
    }
}

// Set up function that will allow the computer to make choice
let computerRoll = function() {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        var computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        var computerChoice = "paper";
    } else {
        var computerChoice = "scissors";
    }
    console.log("Computer Choice is " + computerChoice);
    return computerChoice;
};

let userChoice = function(choice) {
    var userChoice = choice;
    console.log("User Choice is " + choice);
    var computerChoice = computerRoll();
    console.log(compare(userChoice, computerChoice));
    console.log(result[0]);
    // getResult increments either user or computer scores
    const getResult = (function() {
        if (result[1] === "user") {
            userScore++;
            return userScore;
        } else if (result[1] === "comp") {
            compScore++;
            return compScore;
        } else if (result[1] === "tie") {
        }
    } () );
    // Modify elements to new values
    elUserScore.textContent = userScore;
    elCompScore.textContent = compScore;
    elUserPick.textContent = userChoice;
    elCompPick.textContent = computerChoice;
    elOverallResult.textContent = result[0];
}

// Event listeners call userChoice with string value
let rockBox = document.getElementById('rock');
rockBox.addEventListener('click', function() {
    userChoice("rock");
}, false);

let paperBox = document.getElementById('paper');
paperBox.addEventListener('click', function() {
    userChoice("paper");
}, false);
let scissorBox = document.getElementById('scissors');
scissorBox.addEventListener('click', function() {
    userChoice("scissors");
}, false);
