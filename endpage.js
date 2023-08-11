document.getElementById("playbtn").addEventListener('click', function(event) {
    event.preventDefault()

        console.log("working!")
        window.location.href = "/index.html";

});

let totalPoints = (localStorage.getItem("totalPoints"));
let endScoreEl = document.getElementById("endScore");
    endScoreEl.textContent = totalPoints;