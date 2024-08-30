function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
if (window.innerWidth < 1024) {
    document.body.innerHTML = "<h1>Please visit this website on a laptop or desktop for the best experience.</h1>";
}