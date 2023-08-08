//------------------------------Make answer choices buttons----------------------------------//
let allAnswersEl = document.querySelector('button')
let categories = document.querySelectorAll('.categories')
let randomCategoriesID = JSON.parse(localStorage.getItem('categories')) || [];
let qNA= JSON.parse(localStorage.getItem('questions')) || [];

let randCat = JSON.stringify(Math.random() * 20000);
let randNum = (Math.random() * 5);



clearLocalStorage();
getRandomCategories();
getQuestionsAndAnswers();



function getQuestionsAndAnswers(){
    let categoryIDNumber = JSON.parse(localStorage.getItem('categories'))
    for (let i = 0; i < 5; i++) {   
    fetch(`https://jservice.io/api/clues?category=${categoryIDNumber[i].id}`)
        .then(response => response.json())
        .then(QnAData => {
          
            pushAndSave(qNA, QnAData, 'questions')
        })
        
    }
//Working---------here//
}







function getRandomCategories() {

    fetch(`https://jservice.io/api/categories?count=10&offset=${randCat}`)
        .then(response => response.json())
        .then(catData => {

            for (let i = 0; i < catData.length; i++) {
                if (catData[i].clues_count >= 5) {
              
                    pushAndSave(randomCategoriesID,catData[i],'categories')
                    
                }

            }

            displayCategories();
        })
}



function displayCategories() {
    let categoryIDNumber = JSON.parse(localStorage.getItem('categories'))
    for (let i = 0; i < 5; i++) {
        fetch(`https://jservice.io/api/category?id=${categoryIDNumber[i].id}`)
            .then(function (response) {
                return response.json()
            })
                .then(function (categoriesData) {
                    categories[i].textContent = categoriesData.title.toUpperCase();
                })
            }}
        
    


function pushAndSave(x, y, z) {
    x.push(y)
    localStorage.setItem(z, JSON.stringify(x))
}

function clearLocalStorage() {
    localStorage.clear()
}
//fetch using the id in local storage

//---------------------------------Assign fetch category to appropriate place------------------//
// allAnswersEl.addEventListener('click', function(event){
//     if(event.target==='button'){
//         window.location.href='../Questions_Page/questionsPage.html'
//     }
// })




