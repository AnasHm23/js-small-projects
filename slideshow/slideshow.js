let currentIndex = 0;
const images = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.querySelector(".next-btn").addEventListener("click", nextImage);
document.querySelector(".prev-btn").addEventListener("click", prevImage);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        currentIndex = i;
        showImage(currentIndex);
    });
});

// Auto-cycle images every 3 seconds
setInterval(nextImage, 3000);
