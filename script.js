// ================= HEADER SCROLL =================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});


// ================= MENU MOBILE =================
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');

    document.body.style.overflow =
        menu.classList.contains('active') ? 'hidden' : 'auto';
}


// ================= DATOS =================
const datosSedes = {
    lanus: {
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.135474320853!2d-58.3980386!3d-34.7269153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd3790510a71%3A0x6335930218b76426!2sAv.%20Hip%C3%B3lito%20Yrigoyen%204498%2C%20Lan%C3%BAs!5e0!3m2!1ses!2sar!4v1700000000000",
        dir: "📍 Av H Yrigoyen 4498, Lanús",
        tel: "4240-4554",
        pya: "https://www.pedidosya.com.ar/restaurantes/lanus/las-palmas-lanus-5da39863-50ee-40b8-b2e9-76df38ac6c75-menu",
        rappi: "https://www.rappi.com.ar/restaurantes/130982-pizzeria-las-palmas"
    },
    avellaneda: {
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.8677242183214!2d-58.3712356!3d-34.6580665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a333346419747d%3A0xc34a5d848737298!2sAv.%20Mitre%20610%2C%20Avellaneda!5e0!3m2!1ses!2sar!4v1700000000000",
        dir: "📍 Av Mitre 610, Avellaneda",
        tel: "11-7541-8452",
        pya: null,
        rappi: null
    },
    patricios: {
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.809989569473!2d-58.4063878!3d-34.6342417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0653372f5d%3A0x86034e32d56a7985!2sAv.%20Caseros%202999%2C%20CABA!5e0!3m2!1ses!2sar!4v1700000000000",
        dir: "📍 Av Caseros 2999, P Patricios",
        tel: "4308-0858",
        pya: "https://www.pedidosya.com.ar/restaurantes/buenos-aires/las-palmas-parque-patricios-573ae41a-3145-4854-8283-05d215468b0a-menu",
        rappi: "https://www.rappi.com.ar/restaurantes/130976-pizzeria-las-palmas"
    }
};


// ================= CAMBIAR SEDE =================
function cambiarSede(sede, elemento) {
    const info = datosSedes[sede];
    if (!info) return;

    // MAPA Y TEXTO
    document.getElementById('mapa-google').src = info.mapa;
    document.getElementById('direccion-sede').innerText = info.dir;
    document.getElementById('texto-telefono').innerText = info.tel;

    // TEL LINK LIMPIO
    const telLimpio = info.tel.replace(/[^0-9]/g, "");
    document.getElementById('link-telefono').href = "tel:" + telLimpio;

    // DELIVERY LINKS
    const linkPyA = document.getElementById('link-pedidosya');
    const linkRappi = document.getElementById('link-rappi');

    if (linkPyA) {
        if (info.pya) {
            linkPyA.href = info.pya;
            linkPyA.style.display = "inline-block";
        } else {
            linkPyA.style.display = "none";
        }
    }

    if (linkRappi) {
        if (info.rappi) {
            linkRappi.href = info.rappi;
            linkRappi.style.display = "inline-block";
        } else {
            linkRappi.style.display = "none";
        }
    }

    // TABS ACTIVAS
    document.querySelectorAll('.tab-btn')
        .forEach(b => b.classList.remove('active'));

    if (elemento) elemento.classList.add('active');
}


// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
    cambiarSede("lanus"); // sede por defecto
});

// ================= CAROUSEL AUTO =================
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function siguienteSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    mostrarSlide(slideIndex);
}

// iniciar cuando carga la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarSlide(slideIndex);
    setInterval(siguienteSlide, 3500); // cada 3.5 segundos
});