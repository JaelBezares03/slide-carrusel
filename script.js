let numeroSlide = 1;

function mostrarTestimonios(n) {
    const testimonios = document.getElementsByClassName("testimonio");

    // En este bloque if estamos diciendo que si n es mayor
    // al número de testimonios, vamos a volver al primer testimonio
    if (n > testimonios.length) {
        numeroSlide = 1;
    }

    // En este bloque if estamos diciendo que si n es menor
    // al número de testimonios, vamos a volver al último testimonio
    if (n < 1) {
        numeroSlide = testimonios.length;
    }

    // Aquí estamos iniciando el bucle for.
    // Este bucle se va a cumplir mientras que i sea menor al número de testimonios
    // y después de cada iteración, se suma 1 a i.
    // El bucle se encarga de ocultar todos los testimonios.
    for (let i = 0; i < testimonios.length; i++) {
        testimonios[i].style.display = "none";
    }

    // En esta línea, solo se va a mostrar el testimonio que esté en ese momento.
    testimonios[numeroSlide - 1].style.display = 'block';
}

function anterior() {
    mostrarTestimonios(numeroSlide -= 1);
}

function siguiente() {
    mostrarTestimonios(numeroSlide += 1);
}

// Al final, llamamos a mostrarTestimonios con el número actual de slide.
mostrarTestimonios(numeroSlide);
