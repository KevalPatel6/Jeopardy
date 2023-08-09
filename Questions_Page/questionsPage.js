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


// let categoryObject = JSON.parse(localStorage.getItem("currentCategory"));
// let questionObject = JSON.parse(localStorage.getItem("currentQuestion"));
let category = categoryObject.title;
let question = questionObject.question;
let answer = questionObject.answer;
let value = questionObject.value;

console.log(categoryObject)
console.log(questionObject)
let totalPoints = 100;//localStorage.getItem("totalPoints");
console.log(totalPoints);
setPoints.textContent = totalPoints;
answerCorrect.classList.add("hide");
answerIncorrect.classList.add("hide");



        categoryText.textContent = "category: " + category;
        console.log(value, question, answer);

        pointsText.textContent = "point value: " + value;
        questionText.textContent = "the answer is: " + question;
        checkAnswer.addEventListener("click", function(){
            answerText.textContent = answer;
            checkAnswer.classList.add("hide");
            answerCorrect.classList.remove("hide");
            answerIncorrect.classList.remove("hide");
            answerCorrect.addEventListener("click", function(){
                totalPoints += points;  
                console.log(totalPoints);
                localStorage.setItem("totalPoints", totalPoints);
                window.location.href = "../gameboard.html";
            })
            answerIncorrect.addEventListener("click", function(){
                totalPoints -= points;
                console.log(totalPoints);
                localStorage.setItem("totalPoints", totalPoints);
                window.location.href = "../gameboard.html";
            })
        })