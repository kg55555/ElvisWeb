let portfolioFinalPos;
let portfolioScroll;
let picturesTransitionPos;
let scaleFactor = 1.5;
let scrollY = 0;
let carouselScroll = 0;

document.addEventListener('scroll', (event) => {
    setTimeout(function() {
    let winHeight = window.innerHeight;
    let about = document.getElementById("about");
    let portfolio = document.getElementById("portfolio");
    let pictures = document.getElementById("pictures");
    let picturesCarousel = document.getElementById("pictures-carousel");
    scrollY = window.scrollY;

    if (scrollY >= scaleFactor * 3 * winHeight) {
        event.preventDefault();

        carouselScroll = scrollY - scaleFactor * 3 * winHeight;
        picturesCarousel.scrollLeft += carouselScroll * 0.2;
        return;
    }


    about.style.setProperty("top", scrollY * 0.8 + "px");


    if (scrollY > 0 && scrollY <= 2 * 2 * winHeight) {
        portfolioFinalPos = scaleFactor * winHeight + window.scrollY / 3 ;
        portfolio.style.top = portfolioFinalPos + "px";

        picturesTransitionPos = scaleFactor * 3 * winHeight + "px";
        pictures.style.top = picturesTransitionPos;
        portfolioScroll = scrollY;
    } else {
        portfolio.style.top = portfolioFinalPos + (scrollY - portfolioScroll) * 0.8 + "px";
        pictures.style.top = picturesTransitionPos + scaleFactor * winHeight + (scrollY - portfolioScroll) / 2 + "px"; 
    }


    console.log(scrollY);
    }, 0);

})


let overlay = document.getElementById("title-overlay");
let listenerLayer = document.getElementById("listener-layer");

listenerLayer.addEventListener("mousemove", (event) => {
    setTimeout(function() {
        let winHeight = window.innerHeight;
        overlay.style.visibility = "visible";
        overlay.style.clipPath = "circle(" + 0.2 * winHeight + "px at " + event.clientX + "px " + (event.clientY + scrollY * 0.2) + "px)";
    }, 0);
});

listenerLayer.addEventListener("mouseout", (event) => {

    let winHeight = window.innerHeight;
    overlay.style.clipPath = "circle(" + 0.01 * winHeight + "px at " + event.clientX + "px " + (event.clientY + scrollY * 0.2) +"px)";
    setTimeout(function() {
        overlay.style.visibility = "hidden";
    }, 300)

});


