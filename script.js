// ================= NAVBAR SCROLL EFFECT =================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ================= DARK MODE TOGGLE =================
const body = document.body;

const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.classList.add("dark-toggle");
document.querySelector("header").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "☀️";
    } else {
        toggleBtn.innerText = "🌙";
    }
});


// ================= SCROLL ANIMATION =================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, .hero-desc, .hero-img").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// ================= TYPING EFFECT =================
const text = "Build Amazing Products Faster";
let index = 0;
const title = document.querySelector(".hero-desc h1");

function typeEffect() {
    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

title.textContent = "";
typeEffect();


// ================= BUTTON RIPPLE EFFECT =================
document.querySelectorAll(".herosec-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");

        this.appendChild(ripple);

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});