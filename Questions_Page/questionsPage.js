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
let randNum = (Math.random()* 5);
let question;
let category;
let points;
let totalPoints = 100;//localStorage.getItem("totalPoints");
console.log(totalPoints);
setPoints.textContent = totalPoints;
answerCorrect.classList.add("hide");
answerIncorrect.classList.add("hide");


fetch(`https://jservice.io/api/categories?count=1&offset=${randCat}`)
    .then(response => response.json())
    .then(catData =>{
        let catValue = catData[0].id;
        let category = catData[0].title;
        categoryText.textContent = "category: " + category;
        console.log(catValue);
        return fetch(`https://jservice.io/api/category?id=${catValue}`);
    })
    .then(response => response.json())
    .then(data =>{
        console.log(JSON.stringify(data));
        let answer = data.clues[0].answer;
        question = data.clues[0].question;
        points = data.clues[0].value;
        console.log(points, question, answer);

        pointsText.textContent = "point value: " + points;
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
                window.location.href = "../gameboard-layout/gameboard.html";
            })
            answerIncorrect.addEventListener("click", function(){
                totalPoints -= points;
                console.log(totalPoints);
                localStorage.setItem("totalPoints", totalPoints);
                window.location.href = "../gameboard-layout/gameboard.html";
            })
        })
    })