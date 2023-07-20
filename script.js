let portfolioFinalPos;
let portfolioScroll;
let picturesTransitionPos;
let scaleFactor = 1.5;
let scrollY = 0;
let carouselScroll = 0;

let projects = ["pondr", "hitachi", "chexy", "uxcol", "troop", "sfu"];
let projectsTrans = {"pondr": 1, "hitachi": 1, "chexy": 1, "uxcol": 1, "troop": 1, "sfu": 1};
let projectsTransLock = {"pondr": 0, "hitachi": 0, "chexy": 0, "uxcol": 0, "troop": 0, "sfu": 0};

projects.forEach(element => {
    let projectOne = document.getElementById(element);
    let projectOneNum = document.getElementById(element + "-num");
    let projectOneText = document.getElementById(element + "-text");
    let projectOneDesc = document.getElementById(element + "-desc");
    let projectOneAnim = document.getElementById(element + "-anim");

    projectOne.addEventListener('mouseenter', (event) => {

        if (projectsTrans[element] == 1 && projectsTransLock[element] == 0) {
            projectsTransLock[element] = 1;
            projectOneText.style.animation = "disappear 1000ms";
            projectOneDesc.style.animation = "appear 1000ms";
            projectOneNum.style.animation = "fade-in 1000ms";
            projectOneAnim.style.animation = "slide-in 1000ms";
            projectOneText.style.opacity = 0;
            projectOneDesc.style.opacity = 1;
            projectsTrans[element] = 0;
            projectsTransLock[element] = 0;
        } else if (projectsTransLock[element] == 0) {
            projectsTransLock[element] = 1;
            projectOneText.style.animation = "appear 1000ms";
            projectOneDesc.style.animation = "disappear 1000ms";
            projectOneNum.style.animation = "fade-out 1000ms";
            projectOneAnim.style.animation = "slide-out 1000ms";
            projectOneText.style.opacity = 1;
            projectOneDesc.style.opacity = 0;
            projectsTrans[element] = 1;
            projectsTransLock[element] = 0;
        }

    })

});

let allPictures = ["one", "two", "three", "four", "five", "six"];
let pictureLinks = {"one": "https://doc.clickup.com/9003198274/p/h/8ca3tu2-462/f82d436bae9fde2", "two": "https://elvisdare07.github.io/Neri-Hu/", "three": "https://elvisdare07.github.io/EHCapital/", "four": "#", "five": "https://doc.clickup.com/9003198274/p/h/8ca3tu2-702/463fb864b8a0446#", "six": "https://doc.clickup.com/9003198274/p/h/8ca3tu2-702/463fb864b8a0446"}

allPictures.forEach(element => {
    let picture = document.getElementById(element + "-picture");
    let pictureOverlay = document.getElementById(element + "-picture-overlay");
    let pictureTitle = document.getElementById(element + "-picture-title");
    let pictureText = document.getElementById(element + "-picture-text");

    pictureOverlay.addEventListener('click', (event)=> {
        window.open(pictureLinks[element]);
    })

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


    if (scrollY > 0 && scrollY <= 2.2 * winHeight) {
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

})


let overlay = document.getElementById("title-overlay");
let listenerLayer = document.getElementById("listener-layer");

listenerLayer.addEventListener("mousemove", (event) => {
        let winHeight = window.innerHeight;
        overlay.style.visibility = "visible";
        overlay.style.clipPath = "circle(" + 0.2 * winHeight + "px at " + event.clientX + "px " + (event.clientY + scrollY * 0.2) + "px)";

        if (event.clientY < 0.3 * winHeight) {
            navBar.style.backgroundColor = "#c6c6c6";
        } else {
            navBar.style.backgroundColor = "transparent";
        }

});

listenerLayer.addEventListener("mouseout", (event) => {

    let winHeight = window.innerHeight;
    overlay.style.clipPath = "circle(" + 0.01 * winHeight + "px at " + event.clientX + "px " + (event.clientY + scrollY * 0.2) +"px)";
    setTimeout(function() {
        overlay.style.visibility = "hidden";
    }, 300)

});

let buttonListeners = ["about", "work", "photography", "contact"];
let buttonScroll = [0, 3.2, 4.51, 8.2];

for(let i = 0; i < buttonListeners.length; i++) {

    let btn = document.getElementById(buttonListeners[i] + "-button");
    btn.addEventListener("click", (event) => {

        window.scrollTo(0, buttonScroll[i] * window.innerHeight);

    })

let siteHome = document.getElementById("siteName");
siteHome.addEventListener("click", (event) => {
    window.location.assign("index.html");
})

}

$(document).ready(function () {

    setInterval(function () {
      var dateTime = moment().format("MMMM Do YYYY");
      $("#date-time").text(dateTime);
      dateTime = moment().format("h:mm:ss a")
      $("#date-hour").text(dateTime);
    }, 1000);
  
    // Fetch the weather for Vancouver
    var apiKey = "20d9814bf4msh84563c01c908c51p145503jsn624eb7491784";
    var apiUrl = "https://weatherapi-com.p.rapidapi.com/current.json?q=V5H";
  
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the weather and temperature in the footer
        $("#weather").text(data.current.condition.text + ", " + data.current.temp_c + "°C");
      })
      .catch((error) => {
        // Show an error message if the weather could not be fetched
        $("#weather").text("Error fetching weather.");
      });
  });

  window.onbeforeunload = () => {
    window.scrollTo({top: 0, left:0, behavior: "instant"});
  }