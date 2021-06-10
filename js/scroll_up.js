const btnScrollToTop = document.querySelector("#scrolltotop");
btnScrollToTop.addEventListener("click", function (){
$("html, body").animate({ scrollTop:0 }, "slow");
});