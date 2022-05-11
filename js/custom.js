// AOS.init({
//     once: true
// });
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});
$(document).ready(function () {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    if (filename == "") {
        filename = "index.php"
    }
    $(".nav-item .nav-link").removeClass("active");
    $(`.nav-item .nav-link[href="${filename}"]`).addClass("active")
})

// banner coin bg animation 
var wH = $(".star-main").height();
var wW = $(".star-main").width();

var generateStars = function generateStars(n) {
    for (var i = 0; i < n; i++) {
        var div = document.createElement('div');
        div.className = i % 20 == 0 ? 'star star--big' : i % 9 == 0 ? 'star star--medium' : 'star';
        // random everywhere!
        div.setAttribute('style', 'top:' + Math.round(Math.random() * wH) + 'px;left:' + Math.round(Math.random() * wW) + 'px;animation-duration:' + (Math.round(Math.random() * 3000) + 3000) + 'ms;animation-delay:' + Math.round(Math.random() * 3000) + 'ms;');
        document.querySelector(".star-main").appendChild(div);
    }
};
generateStars(800);

// timer work
function countdown() {
    let dayStr;
    let hourStr;
    let inputMin;
    let inputSec;
    const timeSpan = new Date("July 1,2022 00:00:00").getTime() - new Date().getTime();

    // 1day = 86400000 milisec
    if((Math.floor(timeSpan / 86400000)).toString().length < 2){
        dayStr = "0" + (Math.floor(timeSpan / 86400000)).toString();
    }
    else{
        dayStr = (Math.floor(timeSpan / 86400000)).toString();
    }
    //  1hour = 3600000 milisec
    if((Math.floor((timeSpan % 86400000) / 3600000)).toString().length < 2){
        hourStr = "0" + (Math.floor((timeSpan % 86400000) / 3600000)).toString();    
    }
    else{
        hourStr = (Math.floor((timeSpan % 86400000) / 3600000)).toString();    
    }
    //   1minute = 60000 milisec
    if((Math.floor((Math.floor((timeSpan % 3600000) / 60000)).toString().length < 2))){
        inputMin = "0" + (Math.floor((timeSpan % 3600000) / 60000)).toString();
    }
    else{
        inputMin = (Math.floor((timeSpan % 3600000) / 60000)).toString();
    }
    if((Math.floor((Math.floor((timeSpan % 60000) / 1000)).toString().length < 2))){
        inputSec = "0" + (Math.floor((timeSpan % 60000) / 1000)).toString();
    }
    else{
        inputSec = (Math.floor((timeSpan % 60000) / 1000)).toString();
    }
    $(".lauching-timer ul ").each((ind,item) => {
        $(item).html("")
    })
    for (i = 0; i < dayStr.length; i++) {
        $(".days ul").append("<li>" + dayStr.substring(i, (i + 1)) + "</li>")
    }
    for (i = 0; i < hourStr.length; i++) {
        $(".hours ul").append("<li>" + hourStr.substring(i, (i + 1)) + "</li>")
    }
    for (i = 0; i < inputMin.length; i++) {
        $(".minutes ul").append("<li>" + inputMin.substring(i, (i + 1)) + "</li>")
    }
    for (i = 0; i < inputSec.length; i++) {
        $(".seconds ul").append("<li>" + inputSec.substring(i, (i + 1)) + "</li>")
    }
}
setInterval(countdown, 1000);


$('.slider-road-map').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})