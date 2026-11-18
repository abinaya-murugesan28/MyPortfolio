
// 1. Mobile navigation menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);
});

// Close mobile menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// 2. Show More button in Professional Journey

const showMoreButton = document.getElementById("show-more");

showMoreButton.addEventListener("click", function () {
    const timeline = document.querySelector(".timeline");

    const extraExperience = document.createElement("article");

    extraExperience.classList.add("timeline-item");

    extraExperience.innerHTML = `
        <span class="year">Future</span>
        <h3>Future Goals</h3>
        <h4>Professional Growth</h4>
        <p>
            I look forward to gaining experience,
            improving my skills and exploring new opportunities.
        </p>
    `;

    timeline.appendChild(extraExperience);

    showMoreButton.style.display = "none";
});


// 3. Scroll reveal animation

const revealElements = document.querySelectorAll(
    ".section, .timeline-item, .interest-card, .family-card, .hobby-card"
);

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});


// 4. Hobby gallery lightbox

const hobbyCards = document.querySelectorAll(".hobby-card");
const lightbox = document.getElementById("lightbox");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDescription = document.getElementById("lightbox-description");
const closeLightbox = document.getElementById("close-lightbox");

hobbyCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");

        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
    });
});

closeLightbox.addEventListener("click", function () {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
});

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
    }
});


// 5. Automatically display the current year

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
