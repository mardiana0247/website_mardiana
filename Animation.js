/* NavBar */
const textElement = document.getElementById('fade');

function fadeIn(element) {
    let opacity = 0;
    const fadeInInterval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1; 
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval); 
        }
    }, 100);
}

/* Gallery */
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.transition = 'opacity 0.8s ease';
        slide.style.opacity = '0';
        slide.style.display = 'none'
    });
    slides[index].style.opacity = '1';
    slides[index].style.display = 'block';
    setTimeout(() => {
        slides[index].style.opacity = '1';
    }, 50);
    slides[index].style.margin = '0 auto'; 
}
function prevSlide() {
    slides[slideIndex].style.display = 'none';
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}
function nextSlide() {
    slides[slideIndex].style.display = 'none';
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}
showSlide(slideIndex);