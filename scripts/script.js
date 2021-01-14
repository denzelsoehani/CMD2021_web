// JavaScript Document
var button = document.getElementById("faq");
var element = document.getElementById("toggle");

if (element) {
    element.classList.add("visible");

    button.addEventListener("click", function (event) {
        event.target
        element.classList.toggle("visible");
    });
}




var button2 = document.getElementById("faq2");
var element2 = document.getElementById("toggle2");

if (element2) {
    element2.classList.add("visible");

    button2.addEventListener("click", function () {
        element2.classList.toggle("visible");
    });
}





var button3 = document.getElementById("faq3");
var element3 = document.getElementById("toggle3");

if (element3) {
    element3.classList.add("visible");

    button3.addEventListener("click", function () {
        element3.classList.toggle("visible");
    });
}




var searchButton = document.getElementById("searchbutton");
var searchBar = document.getElementById("search");

if (searchBar) {

    searchBar.classList.add("hide");

    searchButton.addEventListener("click", function () {
        searchBar.classList.toggle("hide");
    });
}



//queryselector ALL
//
//button.addEventListener("click", function(event) {
//    event.target
//  element.classList.toggle("visible");
//});



//https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/
