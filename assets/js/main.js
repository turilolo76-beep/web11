/* =========================================
   🌟 Main JS - Events Project Clean
========================================= */

const app = {
    darkMode: false,
    events: []
};

/* ================= EVENTS DATA ================= */

const EVENTS_DATA = [
    {
        id: 1,
        title: "ورشة برمجة ويب",
        desc: "تعلم HTML CSS JS",
        image: "https://picsum.photos/seed/coding/600/400",
        category: "تطوير",
        date: "2026-05-10",
        location: "قاعة A1"
    },
    {
        id: 2,
        title: "فعالية ثقافية",
        desc: "أمسية جامعية",
        image: "https://picsum.photos/seed/culture/600/400",
        category: "ثقافة",
        date: "2026-05-12",
        location: "المسرح الجامعي"
    },
    {
        id: 3,
        title: "بطولة رياضية",
        desc: "منافسات كرة القدم",
        image: "https://picsum.photos/seed/sports/600/400",
        category: "رياضة",
        date: "2026-05-15",
        location: "الملعب الجامعي"
    }
];

app.events = EVENTS_DATA;

/* ================= DARK MODE ================= */

function loadTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark");
        app.darkMode = true;
        updateIcon();
    }
}

function toggleTheme() {
    app.darkMode = !app.darkMode;
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", app.darkMode ? "dark" : "light");
    updateIcon();
}



function updateIcon() {
    const darkIcon = document.querySelector("#darkModeToggle i");
    if (!darkIcon) return;
    darkIcon.className = app.darkMode ? "fas fa-sun" : "fas fa-moon";
}

/* ================= CATEGORIES ================= */

const categories = ["جميع التصنيفات", "ثقافة", "رياضة", "موسيقى", "تطوير", "علمي", "عائلي", "فنون"];

function renderCategories() {
    const grid = document.getElementById("categoriesGrid");
    if (!grid) return;

    grid.innerHTML = categories.map(cat =>
        `<div class="col-lg-2 col-md-3 col-6">
            <a href="events.html?cat=${cat}" class="category-chip">
                <span>${cat}</span>
            </a>
        </div>`
    ).join('');
}

/* ================= SLIDER ================= */

function initFeaturedSlider() {
    const track = document.getElementById('sliderTrack');
    if (!track) return;

    // إذا الـ track فيه slides HTML مباشرة، اشتغل عليها
    const slides = track.querySelectorAll('.slide');

    if (slides.length === 0) return;

    let current = 0;

    function goTo(index) {
        current = (index + slides.length) % slides.length;
        track.style.transform = `translateX(${current * 100}%)`;
    }

    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current - 1));
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current + 1));
}

/* ================= LATEST EVENTS ================= */

function renderLatestEvents() {
    const container = document.getElementById("latestEvents");
    if (!container) return;

    container.innerHTML = app.events.map(ev => `
        <div class="col-md-4 mb-4">
            <div class="card event-card">
                <img src="${ev.image}" alt="${ev.title}">
                <div class="p-3">
                    <span class="badge bg-primary">${ev.category}</span>
                    <h5 class="mt-2">${ev.title}</h5>
                    <p class="text-muted">${ev.desc}</p>
                    <a href="event.html?id=${ev.id}" class="btn btn-outline-primary btn-sm">تفاصيل</a>
                </div>
            </div>
        </div>
    `).join('');
}

/* ================= RENDER EVENTS PAGE ================= */

function renderEvents() {
    const container = document.getElementById("eventsContainer");
    if (!container) return;

    container.innerHTML = app.events.map(ev => `
        <div class="col-md-4 mb-4">
            <div class="card event-card">
                <img src="${ev.image}" alt="${ev.title}">
                <div class="p-3">
                    <span class="badge bg-primary">${ev.category}</span>
                    <h5 class="mt-2">${ev.title}</h5>
                    <p class="text-muted">${ev.desc}</p>
                    <a href="event.html?id=${ev.id}" class="btn btn-outline-primary btn-sm">تفاصيل</a>
                </div>
            </div>
        </div>
    `).join('');
}

/* ================= SCROLL TOP ================= */

function initScrollTop() {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (!scrollBtn) return;

    window.addEventListener("scroll", () => {
        scrollBtn.classList.toggle("show", window.scrollY > 300);
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    renderCategories();
    initFeaturedSlider();
    renderLatestEvents();
    renderEvents();
    initScrollTop();

    // Dark mode button
    const darkBtn = document.getElementById("darkModeToggle");
    if (darkBtn) {
        darkBtn.addEventListener("click", toggleTheme);
    }
});