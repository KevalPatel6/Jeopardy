//------------------------------Make answer choices buttons----------------------------------//
let allAnswersEl = document.querySelectorAll('button')
let categories = document.querySelectorAll('.categories')



// let randomCategoriesID = JSON.parse(localStorage.getItem()) || [];
//----------------------------Jason's Question Page fetch-------------------------------------------------------//
let randCat = JSON.stringify(Math.random() * 20000);
let randNum = (Math.random()* 5);




function getRandomCategories(){
    
    fetch(`https://jservice.io/api/categories?count=5&offset=${randCat}`)
    .then(response => response.json())
    .then(catData =>{
        console.log(catData);
        let catValue1 = catData[0].id;
        let catValue2 = catData[1].id;
        let catValue3 = catData[2].id;
        let catValue4 = catData[3].id;
        let catValue5 = catData[4].id;

        pushAndSave(catValue1, catValue2, catValue3, catValue4, catValue5);

        // for (let i = 0; i < 5; i++) {
           
            
        // }
        console.log(catData);

    
})}

displayCategories();

function displayCategories(x) {
    local
    for (let i = 0; i < array.length; i++) {
        fetch(`https://jservice.io/api/category?id=${}`)
        .then(function(response){
            return response.json()
        })
        .then(function(categoriesData){
            console.log(categoriesData)
            
            
            categories[0].textContent = categoriesData.title.toUpperCase();
        })
    }
}
    
// function pushAndSave(a,b,c,d,e){
//     randomCategoriesID.push(key1:value1, key2:value2, key3:value3, key4,value4, key5:value5)
//     localStorage.setItem(, JSON.stringify(randomCategoriesID))
// }


//fetch using the id in local storage

//---------------------------------Assign fetch category to appropriate place------------------//







