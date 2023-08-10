

document.getElementById("playbtn").addEventListener('click', function(event) {
    event.preventDefault()
        localStorage.clear()
        // console.log(window.location.href);
        console.log("working!")
        window.location.href = "/index.html";

});