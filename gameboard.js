//------------------------------Make answer choices buttons----------------------------------//
let allAnswersEl = document.querySelector('#gameboard-container')
let categories = document.querySelectorAll('.categories')
let randomCategoriesID = JSON.parse(localStorage.getItem('categories')) || [];
let questionsAnswersArr = JSON.parse(localStorage.getItem('questions')) || [];
let catAndquestionIndices = JSON.parse(localStorage.getItem('index')) || [];
let totalPoints = parseInt(localStorage.getItem("totalPoints")) || 0;

document.getElementById("bigScore").textContent = "Total Score: " + totalPoints;

let gridLocationIDArr = JSON.parse(localStorage.getItem('gridLocation')) || [];
let allButtonEl = document.querySelectorAll('button')




//This kicks off the gameboard page from local storage or fetches random categories//
if (randomCategoriesID.length >= 5) {
    for (let i = 0; i < 5; i++) {
        displayCategories(i);
        hideChosenQuestions();
    }
}
else {
    fetchRandomNumber();
}


function fetchRandomNumber() {
    fetch("https://api.math.tools/numbers/nod")
        .then(response => response.json())
        .then(randomCats => {
            let numValue = randomCats.contents.nod.numbers.number
            numValue = (Math.random() * 100000)
            let catValue = numValue % 20000
            if (catValue === 0) {
                catValue = 1;
            }
            getRandomCatAndDisplay(catValue);

        });





}

 function getRandomCatAndDisplay(catValue) {


    fetch(`https://jservice.io/api/categories?count=10&offset=${catValue}`)
        .then(response => response.json())
        .then(async catData => {
         

            for (let i = 0; i < catData.length && questionsAnswersArr.length < 5; i++) {
                if (catData[i].clues_count >= 5) {
                    
                    pushAndSave(randomCategoriesID, catData[i], 'categories')
                    await fetch(`https://jservice.io/api/clues?category=${randomCategoriesID[i].id}`)
                    .then(response => response.json())
                    .then(qNAData => {
                        pushAndSave(questionsAnswersArr, qNAData, 'questions')
                        localStorage.setItem("totalPoints", "0")
                        displayCategories(i);
                        
                        })
                }


            }

        })
}


function displayCategories(i) {
    for (let i = 0; i < randomCategoriesID.length; i++) {

        categories[i].textContent = randomCategoriesID[i].title.toUpperCase();

    }


}


function pushAndSave(array, content, key) {
    array.push(content)
    localStorage.setItem(key, JSON.stringify(array))
}

function clearLocalStorage() {
    localStorage.clear()
}

allAnswersEl.addEventListener('click', function (event) {
    if (event.target.matches('button')) {

        let catAndQuestionindices = event.target.dataset.categoryindex + event.target.dataset.questionindex

        pushAndSave(catAndquestionIndices, catAndQuestionindices, 'index')


        window.location.href = '../Questions_Page/questionsPage.html'


    }
})

function hideChosenQuestions() {

    if (catAndquestionIndices.length === 0) {

        return
    }
    else {
        let indicesParsed = JSON.parse(localStorage.index)
        if(catAndquestionIndices.length===25){
            window.location.href="./endpage.html"
        }
        for (let i = 0; i < indicesParsed.length; i++) {
            let arrayOfIndices = indicesParsed[i]
            let arrayOfIndicesSeparated = arrayOfIndices.split('')
            for (let i = 0; i < allButtonEl.length; i++) {
                if (allButtonEl[i].dataset.categoryindex === arrayOfIndicesSeparated[0] && allButtonEl[i].dataset.questionindex === arrayOfIndicesSeparated[1]) {

                    allButtonEl[i].classList.add('hide')

                }

            }
        }
    }
}



