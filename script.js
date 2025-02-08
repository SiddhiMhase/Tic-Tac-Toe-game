let boxes = document.querySelectorAll(".box");//here we can access the elements of class box
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //means here is the trun of "o" player  if the value is true then it print O else print X

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 9],
]; //this the winning patterns means on this position the player 1 or player 2 willl win

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => { //here we added eventlistner because if we click on the box the arrow function will be call
        console.log("box was clicked");
        // box.innerText = ""; it means if we click on the box the text which is present in the inverted quotes will display
        if (turnO) { //here is player O turn if he click the O displays
            box.innerText = "O";
            turnO = false;//false tells that player X turns
        }
        else { //here Player X turn if he click the X displays.
            box.innerText = "X";
            turnO = true; //tells the turn is now of player O.
        }
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => { //creating the function to call the winner.
    msg.innerText = `Congrulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

function checkWinner() {
    for (let pattern of winPatterns) {
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1].innerText],boxes[pattern[2].innerText]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                //winning condition if three of values are same.
                showWinner(pos1Val); //call the function to show the winner.
            }
        }
    }

};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
