document.addEventListener('DOMContentLoaded', function() {
    const slideshow = document.getElementById('slideshow');
    const images = slideshow.querySelectorAll('img');
    let currentIndex = 0;

    images[currentIndex].classList.add('active');

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 2000);
});