/* =========================================
   📌 صفحة تفاصيل الفعالية
========================================= */

const params = new URLSearchParams(window.location.search);
const eventId = parseInt(params.get("id"));

const event = EVENTS_DATA.find(e => e.id === eventId);

function fillEvent() {
    if (!event) return;

    // العنوان الرئيسي
    document.getElementById("eventTitleMain").textContent = event.title;

    // الخلفية
    document.getElementById("eventHeroBg").style.backgroundImage =
        `url(${event.image})`;

    // البيانات الأساسية
    document.getElementById("eventCategoryBadge").textContent = event.category;
    document.getElementById("eventDate").textContent = event.date;
    document.getElementById("eventTime").textContent = event.time;
    document.getElementById("eventLocation").textContent = event.location;
    document.getElementById("eventDuration").textContent = event.duration;

    // الوصف
    document.getElementById("eventDescription").textContent = event.description;

    // sidebar
    document.getElementById("eventSeats").textContent = event.seats;
    document.getElementById("eventLang").textContent = event.lang;
    document.getElementById("eventCert").textContent = event.cert;

    document.getElementById("eventDuration2").textContent = event.duration;
    document.getElementById("eventLocation2").textContent = event.location;
}

document.addEventListener("DOMContentLoaded", fillEvent);