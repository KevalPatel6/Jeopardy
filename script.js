console.log("jason")
console.log("Keval");
console.log("John");

let startButtonEl = document.getElementById('startButtonEl');
let titleEl = document.getElementById('titleEl');

startButtonEl.addEventListener('click', startGame);

function startGame() {
    console.log("working!")

        titleEl.classList.toggle("hide");
        startButtonEl.classList.toggle("hide");
        instructionsTitleEl.classList.toggle("hide");
        instructionsEl.classList.toggle("hide");
        beginGameEl.classList.toggle("hide");
}

// ?start the game event listener goes to Keval's game board


console.log("jason")

console.log("Keval");
console.log("John");
