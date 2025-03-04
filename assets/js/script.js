// Hamburger menu toggle
document.querySelector('.gardinMeny').addEventListener('click', function() {
    const navMenu = document.querySelector('.navMeny');
    navMenu.classList.toggle('active'); // Lägg till/ta bort klassen "active"
});