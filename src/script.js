let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active');
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const link = this.dataset.link;
        window.open(link, '_blank');
    });
});
