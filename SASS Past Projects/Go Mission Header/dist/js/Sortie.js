const burgerBtn = document.querySelector(".burger_btn");
const headerNav = document.querySelector(".header_nav");
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    headerNav.classList.toggle("open");
});