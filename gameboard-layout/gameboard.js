//------------------------------Make answer choices buttons----------------------------------//
let allAnswersEl = document.querySelectorAll('button')
let categories = document.querySelectorAll('.categories')



let randomCategoriesID = JSON.parse(localStorage.getItem('categories')) || [];
//----------------------------Jason's Question Page fetch-------------------------------------------------------//
let randCat = JSON.stringify(Math.random() * 20000);
let randNum = (Math.random()* 5);


getRandomCategories()

function getRandomCategories(){
    
    fetch(`https://jservice.io/api/categories?count=10&offset=${randCat}`)
    .then(response => response.json())
    .then(catData =>{
       
        for (let i = 0; i < catData.length; i++) {
           if(catData[i].clues_count>=5){
            pushAndSave(catData[i].id)
           }
            
        }
    

})}

displayCategories();

function displayCategories(x) {
    let categoryIDNumber = JSON.parse(localStorage.getItem('categories'))
    console.log(categoryIDNumber)
    for (let i = 0; i < 5; i++) {
        console.log(categoryIDNumber[i])
        fetch(`https://jservice.io/api/category?id=${categoryIDNumber[i]}`)
        .then(function(response){
            return response.json()
        })
        .then(function(categoriesData){
            console.log(categoriesData)
            
            
            categories[i].textContent = categoriesData.title.toUpperCase();
        })
    }
}

function pushAndSave(x){
    randomCategoriesID.push(x)
    localStorage.setItem('categories', JSON.stringify(randomCategoriesID))
}


//fetch using the id in local storage

//---------------------------------Assign fetch category to appropriate place------------------//






