var slideIndex = 0;

function showSlides() {
    var slides = document.getElementsByClassName("container-fotoKhaled")[0].children;
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 100); // Altere 2000 para o tempo de exibição de cada slide em milissegundos (aqui é 2 segundos)
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

showSlides();