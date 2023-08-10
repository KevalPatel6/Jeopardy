//------------------------------Make answer choices buttons----------------------------------//
let allAnswersEl = document.querySelector('#gameboard-container')
let categories = document.querySelectorAll('.categories')
let randomCategoriesID = JSON.parse(localStorage.getItem('categories')) || [];
let questionsAnswersArr = JSON.parse(localStorage.getItem('questions')) || [];
let catAndquestionIndices = JSON.parse(localStorage.getItem('index')) || [];
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


    fetch(`https://jservice.io/api/categories?count=5&offset=${catValue}`)
        .then(response => response.json())
        .then(catData => {

            for (let i = 0; i < catData.length; i++) {
                if (catData[i].clues_count >= 5) {

                    pushAndSave(randomCategoriesID, catData[i], 'categories')

                    fetch(`https://jservice.io/api/clues?category=${catData[i].id}`)
                        .then(response => response.json())
                        .then(qNAData => {

                            pushAndSave(questionsAnswersArr, qNAData, 'questions')
                            displayCategories(i);
                        })
                }


            }

        })
}


function displayCategories(i) {
    for (let i = 0; i < 5; i++) {

        categories[i].textContent = randomCategoriesID[i].title.toUpperCase();

    }


}


function pushAndSave(x, y, z) {
    x.push(y)
    localStorage.setItem(z, JSON.stringify(x))
}

function clearLocalStorage() {
    localStorage.clear()
}

allAnswersEl.addEventListener('click', function (event) {
    if (event.target.matches('button')) {

        let catAndQuestionindices = event.target.dataset.categoryindex + event.target.dataset.questionindex

        pushAndSave(catAndquestionIndices, catAndQuestionindices, 'index')

        
        window.location.href='../Questions_Page/questionsPage.html'
        
        

    }
})

function hideChosenQuestions() {

    let indicesParsed = JSON.parse(localStorage.index)
    console.log(indicesParsed);
    if(indicesParsed.length === 25){
        window.location.href = "./endpage.html";
    }
    for (let i = 0; i < indicesParsed.length; i++) {
        let arrayOfIndices = indicesParsed[i];
        let arrayOfIndicesSeparated = arrayOfIndices.split('')
        for (let i = 0; i < allButtonEl.length; i++) {
            if(allButtonEl[i].dataset.categoryindex===arrayOfIndicesSeparated[0] && allButtonEl[i].dataset.questionindex===arrayOfIndicesSeparated[1]){
    
                allButtonEl[i].classList.add('hide')
    
            }
            
        }
    }
}



