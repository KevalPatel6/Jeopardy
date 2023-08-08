//------------------------------Make answer choices buttons----------------------------------//
let allAnswersEl = document.querySelectorAll('button')









//----------------------------fetch categories-------------------------------------------------------//

fetch(`https://jservice.io/api/categories/`)
    .then(function(response){
        response.json()
    })
    .then(function(categories){
        console.log(categories)
    })






//---------------------------------Assign fetch category to appropriate place------------------//







