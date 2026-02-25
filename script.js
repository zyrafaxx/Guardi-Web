// Luz dinâmica
const light = document.getElementById("light");

if (light) {
    document.addEventListener("mousemove", (e) => {
        light.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    });
}

// Parallax simples
const background = document.querySelector(".background");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (background) {
        background.style.transform = `translateY(${scrollY * 0.4}px)`;
    }
});