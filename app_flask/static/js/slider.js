document.addEventListener("DOMContentLoaded", function () {
    // Carrusel 1
    const slides1 = document.querySelectorAll('.imagenes-skills img');
    const slider1 = document.querySelector('.imagenes-skills');
    let slideIndex1 = 1;
    let interval1;

    function showSlide1(n) {
        if (n > slides1.length) {
            slideIndex1 = 1;
        }
        if (n < 1) {
            slideIndex1 = slides1.length;
        }
        for (let i = 0; i < slides1.length; i++) {
            slides1[i].style.display = "none";
        }
        slides1[slideIndex1 - 1].style.display = "block";
    }

    function nextSlide1() {
        showSlide1(slideIndex1 += 1);
    }

    function prevSlide1() {
        showSlide1(slideIndex1 -= 1);
    }

    showSlide1(slideIndex1);
    interval1 = setInterval(nextSlide1, 2000);

    slider1.addEventListener('mouseover', () => {
        clearInterval(interval1);
    });

    slider1.addEventListener('mouseout', () => {
        interval1 = setInterval(nextSlide1, 2000);
    });

    // Carrusel 2
    const slides2 = document.querySelectorAll('.imagenes-skills-2 img');
    const slider2 = document.querySelector('.imagenes-skills-2');
    let slideIndex2 = 1;
    let interval2;

    function showSlide2(n) {
        if (n > slides2.length) {
            slideIndex2 = 1;
        }
        if (n < 1) {
            slideIndex2 = slides2.length;
        }
        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slides2[slideIndex2 - 1].style.display = "block";
    }

    function nextSlide2() {
        showSlide2(slideIndex2 += 1);
    }

    function prevSlide2() {
        showSlide2(slideIndex2 -= 1);
    }

    showSlide2(slideIndex2);
    interval2 = setInterval(nextSlide2, 2000);

    slider2.addEventListener('mouseover', () => {
        clearInterval(interval2);
    });

    slider2.addEventListener('mouseout', () => {
        interval2 = setInterval(nextSlide2, 2000);
    });

    // Carrusel 3
    const slides3 = document.querySelectorAll('.imagenes-skills-3 img');
    const slider3 = document.querySelector('.imagenes-skills-3');
    let slideIndex3 = 1;
    let interval3;

    function showSlide3(n) {
        if (n > slides3.length) {
            slideIndex3 = 1;
        }
        if (n < 1) {
            slideIndex3 = slides3.length;
        }
        for (let i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }
        slides3[slideIndex3 - 1].style.display = "block";
    }

    function nextSlide3() {
        showSlide3(slideIndex3 += 1);
    }

    function prevSlide3() {
        showSlide3(slideIndex3 -= 1);
    }

    showSlide3(slideIndex3);
    interval3 = setInterval(nextSlide3, 2000);

    slider3.addEventListener('mouseover', () => {
        clearInterval(interval3);
    });

    slider3.addEventListener('mouseout', () => {
        interval3 = setInterval(nextSlide3, 2000);
    });
});
