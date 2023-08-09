//------------------------------Make answer choices buttons----------------------------------//
let allAnswersEl = document.querySelector('#gameboard-container')
let categories = document.querySelectorAll('.categories')
let randomCategoriesID = JSON.parse(localStorage.getItem('categories')) || [];
let questionsAnswersArr = JSON.parse(localStorage.getItem('questions')) || [];
let catAndquestionIndices = JSON.parse(localStorage.getItem('index')) || [];

// let randCat = JSON.stringify(Math.random() * 20000);
// let randNum = (Math.random() * 5);

fetch("https://api.math.tools/numbers/nod")
    .then(response => response.json())
    .then(randomCats => {
        let numValue = randomCats.contents.nod.numbers.number;
        numValue = (Math.random() * 100000);
        let catValue = numValue % 20000;
        if(catValue === 0){
            catValue = 1;
        }
    getRandomCatAndDisplay(catValue);
    });
// clearLocalStorage();




function getRandomCatAndDisplay(randCat) {

    if (randomCategoriesID.length >= 5)
        return;

    fetch(`https://jservice.io/api/categories?count=5&offset=${randCat}`)
        .then(response => response.json())
        .then(catData => {

            for (let i = 0; i < catData.length; i++) {
                if (catData[i].clues_count >= 5) {

                    pushAndSave(randomCategoriesID, catData[i], 'categories')
                    
                    fetch(`https://jservice.io/api/clues?category=${catData[i].id}`)
                    .then(response => response.json())
                    .then(qNAData => {

                    pushAndSave(questionsAnswersArr,qNAData,'questions')    
                    categories[i].textContent = randomCategoriesID[i].title.toUpperCase();
                    })
                }
                
                
            }

        })
}

//Can I wait to run the fetch then display categories//

// function displayCategories(i) {
//     for (let i = 0; i < 5; i++) {
              
//       categories[i].textContent = randomCategoriesID[i].title.toUpperCase();

//     }


// }


//     for (let i = 0; i < 5; i++) {
//         fetch(`https://jservice.io/api/category?id=${randomCategoriesID[i].id}`)
//             .then(function (response) {
//                 return response.json()
//             })
//             .then(function (categoriesData) {
//                 console.log(categoriesData)
//                 categories[i].textContent = categoriesData.title.toUpperCase();
//             })
//     }
// }




function pushAndSave(x, y, z) {
    x.push(y)
    localStorage.setItem(z, JSON.stringify(x))
}

function clearLocalStorage() {
    localStorage.clear()
}
//fetch using the id in local storage

// ---------------------------------Assign fetch category to appropriate place------------------//
allAnswersEl.addEventListener('click', function(event){
    if(event.target.matches('button')){
        let questionindexes = event.target.dataset.categoryindex + event.target.dataset.questionindex 
        
        pushAndSave(catAndquestionIndices, questionindexes, 'index')
      


        window.location.href='../Questions_Page/questionsPage.html'
    }
})




