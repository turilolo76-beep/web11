/* =========================================
   📌 صفحة جميع الفعاليات
========================================= */
// Category Preferences with localStorage
const categoryFilter = document.getElementById('categoryFilter');
const dateFilter = document.getElementById('dateFilter');
const searchInput = document.getElementById('searchInput');

// Load saved preferences
function loadPreferences() {
  const savedCategory = localStorage.getItem('preferredCategory') || '';
  const savedDate = localStorage.getItem('preferredDate') || '';
  
  if (categoryFilter) categoryFilter.value = savedCategory;
  if (dateFilter) dateFilter.value = savedDate;
  
  // Trigger filter
  filterEvents();
}

// Save preferences
function savePreferences() {
  if (categoryFilter) {
    localStorage.setItem('preferredCategory', categoryFilter.value);
  }
  if (dateFilter) {
    localStorage.setItem('preferredDate', dateFilter.value);
  }
}

// Update filter function
function filterEvents() {
  savePreferences(); // Save on every filter change
  
  const search = searchInput?.value.toLowerCase() || '';
  const category = categoryFilter?.value || '';
  const dateFilterValue = dateFilter?.value || '';
  
  let filtered = EVENTS_DATA.filter(event => {
    const matchesSearch = !search || 
      event.title.toLowerCase().includes(search) || 
      event.description.toLowerCase().includes(search) ||
      event.location.toLowerCase().includes(search);
    
    const matchesCategory = !category || event.category === category;
    
    // Date filter logic
    const matchesDate = !dateFilterValue || dateFilterValue === 'today';
    
    return matchesSearch && matchesCategory && matchesDate;
  });
  
  renderFilteredEvents(filtered);
  updateResultsCount(filtered.length);
}

// Event listeners
if (categoryFilter) categoryFilter.addEventListener('change', filterEvents);
if (dateFilter) dateFilter.addEventListener('change', filterEvents);
if (searchInput) {
  searchInput.addEventListener('input', debounce(filterEvents, 300));
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Load on page load
document.addEventListener('DOMContentLoaded', loadPreferences);
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