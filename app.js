const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#resetButton");
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playTo = document.querySelector('#playTo');

let winScore = 3;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

const reset = () => {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;

    p2Button.removeAttribute("disabled");
    p1Button.removeAttribute("disabled");
    p2Display.classList.remove("winner", "loser");
    p1Display.classList.remove("winner", "loser");
}

p1Button.addEventListener("click", () => {
    if(!isGameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === winScore) {
            isGameOver = true;
            p1Button.setAttribute("disabled", "true");
            p2Button.setAttribute("disabled", "true");
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
       
       
    }
});

p2Button.addEventListener("click", () => {
    if(!isGameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === winScore) {
            isGameOver = true;
            p2Button.setAttribute("disabled", "true");
            p1Button.setAttribute("disabled", "true");
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
    }
});

resetButton.addEventListener("click", reset);

playTo.addEventListener("change", function () {
    winScore = parseInt(this.value);
    reset();
});
