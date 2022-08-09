// NAV SCROLL BACKGROUND

$(function() {
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    })
})


// NAV TOGGLE

var menu = document.getElementById("bar")
var items = document.getElementById("navbar");

items.style.right = "-360px";

menu.onclick = function() {
    if (items.style.right == "-360px") {
        items.style.right = "0"; 
    }
    else {
        items.style.right = "-360px";
    }
}



// PRELOADER

var loader = document.getElementById("prelaoder");

window.addEventListener("load", function(){
    loader.style.display = "none";
})