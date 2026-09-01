const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;
let slideInterval;

/*SHOW SLIDE*/
function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    }
    else if (index < 0) {
        currentSlide = slides.length - 1;
    }
    else {
        currentSlide = index;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

/*NEXT*/
function nextSlide() {
    showSlide(currentSlide + 1);
}

/*PREVIOUS*/
function previousSlide() {
    showSlide(currentSlide - 1);
}

/*BUTTONS*/
nextBtn.addEventListener("click", () => {
    nextSlide();
    restartSlider();
});

prevBtn.addEventListener("click", () => {
    previousSlide();
    restartSlider();
});

/*DOTS*/
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        restartSlider();
    });
});

/*AUTO SLIDE*/
function startSlider() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function restartSlider() {
    clearInterval(slideInterval);
    startSlider();
}

/* Start */
startSlider();