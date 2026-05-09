function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;

    // Update Greeting
    const greeting = document.getElementById('greeting');
    const hour = now.getHours();
    if (hour < 12) greeting.textContent = "Good Morning";
    else if (hour < 18) greeting.textContent = "Good Afternoon";
    else greeting.textContent = "Good Evening";

    // Update Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Theme Toggle Animation
const toggleBtn = document.getElementById('theme-toggle');
let focusMode = false;

toggleBtn.addEventListener('click', () => {
    focusMode = !focusMode;
    const card = document.querySelector('.glass-card');
    
    if (focusMode) {
        card.style.background = 'rgba(0, 0, 0, 0.4)';
        toggleBtn.textContent = 'Normal Mode';
        toggleBtn.style.background = '#ec4899';
    } else {
        card.style.background = 'rgba(255, 255, 255, 0.05)';
        toggleBtn.textContent = 'Focus Mode';
        toggleBtn.style.background = '#6366f1';
    }
});

// Simple mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.glass-card');
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
});
