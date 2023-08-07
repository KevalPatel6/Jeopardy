let randCat = JSON.stringify(Math.random() * 20000);
let randNum = (Math.random()* 5);
let question;
let answer;
let category;
let points;
fetch(`https://jservice.io/api/categories?count=1&offset=${randCat}`)
    .then(response => response.json())
    .then(catData =>{
        let catValue = catData[0].id;
        let category = catData[0].title;
        console.log(catValue);
        return fetch(`https://jservice.io/api/category?id=${catValue}`);
    })
    .then(response => response.json())
    .then(data =>{
        answer = data.clues[0].answer;
        question = data.clues[0].question;
        points = data.clues[0].value;
        console.log(points, question, answer);
    })
