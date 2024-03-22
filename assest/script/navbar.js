const menu = document.querySelector("nav div button")
const list = document.querySelector("nav div ul")
const navCheker = document.querySelector("nav div input[type=checkbox]")
const spanMenu = document.querySelector("nav div button span")

menu.addEventListener("click", () => {
    navCheker.checked = !navCheker.checked

    if (navCheker.checked == true) {
        list.classList.add("side")
        menu.classList.add("menu-active")
        spanMenu.classList.add("span-menu")
    } else {
        list.classList.remove("side")
        menu.classList.remove("menu-active")
        spanMenu.classList.remove("span-menu")
    }
})

document.addEventListener("click", (e) => {
    if (!list.contains(e.target) && !menu.contains(e.target)) {
        list.classList.remove("side")
        menu.classList.remove("menu-active")
        spanMenu.classList.remove("span-menu")
    };
});
  
