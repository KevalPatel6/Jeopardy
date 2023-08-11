let questionText = document.querySelector("#question");
let answerText = document.querySelector("#answer");
let timerText = document.querySelector("#timer");
let pointsText = document.querySelector("#points");
let categoryText = document.querySelector("#category");
let checkAnswer = document.querySelector("#check-answer");
let answerCorrect = document.querySelector("#correctButton");
let answerIncorrect = document.querySelector("#incorrectButton")
let setPoints = document.querySelector("#points-value")
let randCat = JSON.stringify(Math.random() * 20000);
let lsCatIndex = JSON.parse(localStorage.getItem("index"));
let item = lsCatIndex[lsCatIndex.length - 1].split("");

let categoryObject = JSON.parse(localStorage.getItem("categories"))[item[0]];
let questionObject = JSON.parse(localStorage.getItem("questions"))[item[0]][item[1]];
let sCat = JSON.parse(localStorage.getItem("categories"))
let sQuest = JSON.parse(localStorage.getItem("questions"))
console.log("CATEGORIES", sCat)
console.log("QUESTIONS", sQuest)
let pointValueObject = JSON.parse(localStorage.getItem("index"))
let pointValue = pointValueObject[pointValueObject.length - 1].split("")[1]
console.log(categoryObject, questionObject, pointValue)


// let categoryObject = JSON.parse(localStorage.getItem("currentCategory"));
// let questionObject = JSON.parse(localStorage.getItem("currentQuestion"));
let category = categoryObject.title;
let question = questionObject.question;
let answer = questionObject.answer;
let value = questionObject.value;

let totalPoints = parseInt(localStorage.getItem("totalPoints"));   //localStorage.getItem("totalPoints");
// console.log(totalPoints);
let questionPoints = 0;
if (pointValue === "0") {
    questionPoints = 200
} else {
    // console.log(pointValue)
    questionPoints = (parseInt(pointValue) + 1) * 200
    console.log(questionPoints)
}
pointsText.textContent = "point value:  " + questionPoints;
answerCorrect.classList.add("hide");
answerIncorrect.classList.add("hide");



categoryText.innerHTML = `category:  <p> ${category}</p>`;
console.log(value, question, answer);

// pointsText.textContent = "point value: " + value;
questionText.innerHTML = `The answer is: <p> ${question}</p>`;

checkAnswer.addEventListener("click", function () {
    answerText.textContent = answer;
    checkAnswer.classList.add("hide");
    answerCorrect.classList.remove("hide");
    answerIncorrect.classList.remove("hide");
    answerCorrect.addEventListener("click", function () {
       
        totalPoints = parseInt(localStorage.getItem("totalPoints"))
        totalPoints += questionPoints;
        console.log(totalPoints);
        localStorage.setItem("totalPoints", totalPoints);
        window.location.href = "../gameboard.html";
    })
    answerIncorrect.addEventListener("click", function () {
        totalPoints = parseInt(localStorage.getItem("totalPoints"))
        totalPoints -= questionPoints;
        console.log(totalPoints);
        localStorage.setItem("totalPoints", totalPoints);
        window.location.href = "../gameboard.html";
    })
})