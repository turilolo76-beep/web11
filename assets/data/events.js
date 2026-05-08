/* =========================================
   📌 صفحة جميع الفعاليات
========================================= */

function renderEvents() {
    const grid = document.getElementById("eventsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    EVENTS_DATA.forEach(event => {
        grid.innerHTML += `
            <div class="col-lg-4 col-md-6">
                <a href="event.html?id=${event.id}" class="text-decoration-none">
                    <div class="event-card card h-100">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                        <div class="card-body">
                            <span class="badge bg-primary">${event.category}</span>
                            <h5 class="mt-2">${event.title}</h5>
                            <p class="text-muted">${event.description}</p>
                            <small>📍 ${event.location}</small>
                        </div>
                    </div>
                </a>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", renderEvents);