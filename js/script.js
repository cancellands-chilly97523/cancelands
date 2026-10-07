document.addEventListener('DOMContentLoaded', () => {
    // Target Control Interface Nodes
    const themeToggleBtn = document.getElementById('theme-toggle');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const contentBody = document.getElementById('readable-content');

    // Font Baseline Tracker (rem units)
    let currentFontSize = 1.15; 
    const maxFontSize = 1.55;
    const minFontSize = 0.95;

    // --- Night Mode Logic ---
    // Check local storage records for user configuration persistence
    if (localStorage.getItem('nightMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️ Day';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('nightMode', 'enabled');
            themeToggleBtn.textContent = '☀️ Day';
        } else {
            localStorage.setItem('nightMode', 'disabled');
            themeToggleBtn.textContent = '🌙 Night';
        }
    });

    // --- Font Size Scaler Logic ---
    increaseFontBtn.addEventListener('click', () => {
        if (currentFontSize < maxFontSize) {
            currentFontSize += 0.1;
            contentBody.style.fontSize = `${currentFontSize}rem`;
        }
    });

    decreaseFontBtn.addEventListener('click', () => {
        if (currentFontSize > minFontSize) {
            currentFontSize -= 0.1;
            contentBody.style.fontSize = `${currentFontSize}rem`;
        }
    });
});
