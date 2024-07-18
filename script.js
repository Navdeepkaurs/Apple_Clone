// -----------------------SCRIPT FOR MAIN PAGE------------------------------------------------------------------------------------------------------------ 
/* ************************************************************************ */
// section 3 video pause button
var video = document.getElementById("myVideo");
// Get the button
var btn = document.getElementById("myBtn");
var icon = document.getElementById("icon");
// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        //btn.innerHTML = "Pause";
    } else {
        video.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        //btn.innerHTML = "Play";
    }
}
/* ************************************************************************ */

/* ************************************************************************ */
// animation for the slider 

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let paused = false;

function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length;
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === slideIndex);
    });
}

function nextSlide() {
    if (!paused) {
        showSlide(slideIndex + 1);
    }
}

function currentSlide(n) {
    if (!paused) {
        showSlide((slideIndex = n - 1));
    }
}

//showSlide(slideIndex);
let intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds


//function to toggle play/pause
function togglePlayPause() {
    paused = !paused;
    const playpausebutton = document.getElementById("playPauseButton");
    const animebutton = document.getElementById("animebutton");
    if (paused) {
        playpausebutton.innerHTML =
            '<i class="fa-regular fa-circle-play fa-xs" style="color:black;"></i>';
        animebutton.style.color = "black";
        clearInterval(intervalId);
    } else {
        playpausebutton.innerHTML =
            '<i class="fa-regular fa-circle-pause fa-xs" style="color:black;"></i>';
        animebutton.style.color = "black";
        intervalId = setInterval(nextSlide, 3000);
    }
}

// event listener for the play/pause button
document
    .getElementById("playPauseButton")
    .addEventListener("click", togglePlayPause);
showSlide(slideIndex);

//  animation for slider ends
/* ************************************************************************ */
// ------------------------------------------------------------------------------------------------------------------------------------------------------------- 



