document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.querySelector('.sidebarBtn');
    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});
