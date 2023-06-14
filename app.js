var showslide = document.getElementById("showslide");
var allImg = document.getElementById("imgslider");
var a = allImg.getElementsByTagName("img");
var indexNo = 0;

function renderSlide(){
showslide.src = a[indexNo].src
}
renderSlide();

function nextSlide(){
    if(indexNo+1 == a.length){
        indexNo= 0
    } else{
        indexNo++
    }
    renderSlide()
};

setInterval(function(){nextSlide()},2000);

window.offersPage = function(){
    window.location.assign("pages/deals.html");
    console.log("done");
};

