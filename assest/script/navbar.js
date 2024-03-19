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

// window.addEventListener("click", e => {
//     if (!list.contains(e.target) && !navCheker.contains(e.target)) {
//         navCheker.checked = false
//         list.classList.remove("side")
//         menu.classList.remove("menu-active")
//         spanMenu.classList.remove("span-menu")
//     };
// });
  
