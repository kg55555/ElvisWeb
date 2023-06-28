let portfolioFinalPos;
let portfolioScroll;
let picturesTransitionPos;
let scaleFactor = 1.5;
let scrollY = 0;
let carouselScroll = 0;

let projects = ["pondr", "hitachi", "chexy", "rate", "uxcol", "neri", "troop", "sfu", "dare"];

projects.forEach(element => {
    let projectOne = document.getElementById(element);
    let projectOneText = document.getElementById(element + "-text");
    let projectOneDesc = document.getElementById(element + "-desc");

    projectOne.addEventListener('mouseover', (event) => {
        projectOneText.style.opacity = 0;
        projectOneDesc.style.opacity = 1;

})
    projectOne.addEventListener('mouseout', (event) => {
        projectOneText.style.opacity = 1;
        projectOneDesc.style.opacity = 0;

    })
});


document.addEventListener('scroll', (event) => {
    setTimeout(function() {
    let winHeight = window.innerHeight;
    let winWidth = window.innerWidth;
    let about = document.getElementById("about");
    let portfolio = document.getElementById("portfolio");
    let pictures = document.getElementById("pictures");

    let pageHeader = document.getElementById("page-header");

    let picturesCarousel = document.getElementById("pictures-carousel");
    scrollY = window.scrollY;

    about.style.setProperty("top", scrollY * 0.8 + "px");

    if (scrollY > 2 * winHeight) {
        pageHeader.style.backgroundColor = "transparent";
        pageHeader.style.color = "white";
    } else {
        pageHeader.style.backgroundColor = "#c1c1c1";
        pageHeader.style.color = "black";
    }

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

    if (scrollY > 4.52 * winHeight && scrollY < 7.67 * winHeight) {
        picturesCarousel.style.position = "fixed";
        picturesCarousel.style.marginTop = "10vh";
        picturesCarousel.style.top = scrollY * 0.001 + 'px';
        picturesCarousel.style.left = -(scrollY - 4.52 * winHeight) * 0.32 * winWidth / winHeight + 'px';
    } else if (scrollY <= 4.52 * winHeight) {
        picturesCarousel.style.position = "initial";
        picturesCarousel.style.marginTop = "0";
    } else {
        picturesCarousel.style.position = "fixed";
        picturesCarousel.style.marginTop = (winHeight / 10 - (scrollY - 7.67 * winHeight)) * 0.32 * winWidth / winHeight + "px";
        picturesCarousel.style.top = scrollY * 0.001 + 'px';
    }

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


