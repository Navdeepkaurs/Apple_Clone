// -----------------------SCRIPT FOR MAC PAGE------------------------------------------------------------------------------------------------------------   
// Function to handle scroll event
function handleScroll() {
    var videoElement = document.getElementById('myVideo');
    // Change width and height of video on scroll
    videoElement.style.width = '80%';
    videoElement.style.height = '80vh'; // 80% of viewport height
    // Add border-radius to video
    videoElement.style.borderRadius = '10px';
    videoElement.style.marginLeft = '150px';
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);


// next event 

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- 
