// Toggle the menu for mobile view
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('visible');
    if (menu.classList.contains('visible')) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});

// Handle button interactions for filtering
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(`You clicked ${button.textContent}`);
    });
});
