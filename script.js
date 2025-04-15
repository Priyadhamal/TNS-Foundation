let player1 = "Player 1";
let player2 = "Player 2";
let player3 = "Player 3";
let player4 = "Player 4";

// Function to change the player name
function editNames() {
    let newName1 = prompt("Enter Player 1 name", player1);
    let newName2 = prompt("Enter Player 2 name", player2);
    let newName3 = prompt("Enter Player 3 name", player2);
    let newName4 = prompt("Enter Player 4 name", player2);

    if (newName1) player1 = newName1;
    if (newName2) player2 = newName2;
    if (newName3) player3 = newName3;
    if (newName4) player4 = newName4;

    document.querySelector("p.Player1").textContent = player1;
    document.querySelector("p.Player2").textContent = player2;
    document.querySelector("p.Player3").textContent = player3;
    document.querySelector("p.Player4").textContent = player4;
}


// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
        // Generate random numbers for each player
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        let randomNumber3 = Math.floor(Math.random() * 6) + 1;
        let randomNumber4 = Math.floor(Math.random() * 6) + 1;

        // Update the dice images based on random number
        document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
        document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");
        document.querySelector(".img3").setAttribute("src", "dice" + randomNumber3 + ".png");
        document.querySelector(".img4").setAttribute("src", "dice" + randomNumber4 + ".png");


        // Display result
        if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3 && randomNumber3 === randomNumber4) {
            document.querySelector("h1").textContent = "It's a Draw!";
        } else {
            let maxNumber = Math.max(randomNumber1, randomNumber2, randomNumber3, randomNumber4);
            let winner;
    
            if (maxNumber === randomNumber1) winner = player1;
            if (maxNumber === randomNumber2) winner = player2;
            if (maxNumber === randomNumber3) winner = player3;
            if (maxNumber === randomNumber4) winner = player4;
    
            document.querySelector("h1").textContent = winner + " WINS!";
        }
    }, 2500);
}
 
