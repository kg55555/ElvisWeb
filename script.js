let portfolioFinalPos;
let portfolioScroll;
let picturesTransitionPos;
let scaleFactor = 1.5;
let scrollY = 0;
let carouselScroll = 0;

let projects = ["pondr", "hitachi", "chexy", "rate", "uxcol", "neri", "troop", "sfu", "dare"];

projects.forEach(element => {
    let projectOne = document.getElementById(element);
    let projectOneNum = document.getElementById(element + "-num");
    let projectOneText = document.getElementById(element + "-text");
    let projectOneDesc = document.getElementById(element + "-desc");
    let projectOneAnim = document.getElementById(element + "-anim");

    projectOne.addEventListener('mouseenter', (event) => {

        if (projectOneText.style.opacity == 1) {
            projectOneText.style.animation = "disappear 1000ms";
            projectOneDesc.style.animation = "appear 1000ms";
            projectOneNum.style.animation = "fade-in 1000ms";
            projectOneAnim.style.animation = "slide-in 1000ms";
            projectOneText.style.opacity = 0;
            projectOneDesc.style.opacity = 1;
        } else {
            projectOneText.style.animation = "appear 1000ms";
            projectOneDesc.style.animation = "disappear 1000ms";
            projectOneNum.style.animation = "fade-out 1000ms";
            projectOneAnim.style.animation = "slide-out 1000ms";
            projectOneText.style.opacity = 1;
            projectOneDesc.style.opacity = 0;
        }



    })
});

let allPictures = ["one", "two", "three", "four", "five", "six"];

allPictures.forEach(element => {
    let picture = document.getElementById(element + "-picture");
    let pictureOverlay = document.getElementById(element + "-picture-overlay");
    let pictureTitle = document.getElementById(element + "-picture-title");
    let pictureText = document.getElementById(element + "-picture-text");

    picture.addEventListener('mouseenter', (event) => {
        if (picture.dataset.active == "false") {
            pictureOverlay.style.animation = "slide-up 1000ms";
            pictureTitle.style.animation = "picture-text-fade-in 1000ms";
            pictureText.style.animation = "picture-text-fade-in 1000ms";
            pictureOverlay.style.top = "0";
            picture.dataset.active = "true";

        } else {
            pictureOverlay.style.animation = "slide-down 1000ms";
            pictureTitle.style.animation = "picture-text-fade-out 1000ms";
            pictureText.style.animation = "picture-text-fade-out 1000ms";

            pictureOverlay.style.top = "100%";
            picture.dataset.active = "false"
        }
    })
});

let navBar = document.getElementById("navbar");

document.addEventListener('scroll', (event) => {
    setTimeout(function() {
    let winHeight = window.innerHeight;
    let winWidth = window.innerWidth;
    let about = document.getElementById("about");
    let portfolio = document.getElementById("portfolio");
    let pictures = document.getElementById("pictures");

    let siteName = document.getElementById("siteName");

    let picturesCarousel = document.getElementById("pictures-carousel");
    scrollY = window.scrollY;

    //Navbar transition when scrolling below landing
    if (scrollY > 2 * winHeight) {
        siteName.style.color = "#c6c6c6";
        navBar.style.color = "#c6c6c6";
        navBar.style.backgroundColor = "#1E1E1E"
        navBar.style.border = "0.1vw solid #c6c6c6";
    } else {
        siteName.style.color = "#1E1E1E";
        navBar.style.color = "#1E1E1E";
        navBar.style.backgroundColor = "transparent"
        navBar.style.border = "none";
    }

    about.style.transform = "translateY(" + scrollY * 0.8 + "px)";

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
        picturesCarousel.style.left = -(scrollY - 4.52 * winHeight) * 0.33 * winWidth / winHeight + 'px';
    } else if (scrollY <= 4.52 * winHeight) {
        picturesCarousel.style.position = "initial";
        picturesCarousel.style.marginTop = "0";
    } else {
        picturesCarousel.style.position = "fixed";
        picturesCarousel.style.marginTop = (winHeight / 10 - (scrollY - 7.67 * winHeight)) * 0.33 * winWidth / winHeight + "px";
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

        if (event.clientY < 0.3 * winHeight) {
            navBar.style.backgroundColor = "#c6c6c6";
        } else {
            navBar.style.backgroundColor = "transparent";
        }

    }, 0);
});

listenerLayer.addEventListener("mouseout", (event) => {

    let winHeight = window.innerHeight;
    overlay.style.clipPath = "circle(" + 0.01 * winHeight + "px at " + event.clientX + "px " + (event.clientY + scrollY * 0.2) +"px)";
    setTimeout(function() {
        overlay.style.visibility = "hidden";
    }, 300)

});

let buttonListeners = ["about", "work", "photography", "contact"];
let buttonScroll = [0, 2.28, 4.51, 8.2];

for(let i = 0; i < buttonListeners.length; i++) {
    console.log(i, buttonListeners[i], buttonScroll[i])
    let btn = document.getElementById(buttonListeners[i] + "-button");
    btn.addEventListener("click", (event) => {

        window.scrollTo(0, buttonScroll[i] * window.innerHeight);

    })
}
