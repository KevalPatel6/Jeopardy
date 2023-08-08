console.log("jason")
console.log("Keval");
console.log("John");

let startButtonEl = document.getElementById('startButtonEl');
let titleEl = document.getElementById('titleEl');

startButtonEl.addEventListener('click', nextPage);

function nextPage() {
    console.log("working!")

    titleEl.classList.toggle("hide");
    startButtonEl.classList.toggle("hide");
    buttonDiv.classList.toggle("hide");
    instructionsTitleEl.classList.toggle("hide");
    instructionsEl.classList.toggle("hide");
    beginGameEl.classList.toggle("hide");
}

// ?start the game event listener goes to Keval's game board

let beginGameEl = document.getElementById('beginGameEl');

document.getElementById("beginGameEl").addEventListener('click', startGame);

function startGame() {
    console.log(window.location.href);
    console.log("working!")
    window.location.href = "/gameboard.html";
}