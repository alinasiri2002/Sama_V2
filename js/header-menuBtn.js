const openBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-menu-btn")


const openFunc = () => {
    const menu = document.getElementsByClassName("first-nav")[0]
    menu.classList.add("open")
}

const closeFunc = () => {
    const menu = document.getElementsByClassName("first-nav")[0]
    menu.classList.remove("open")
}

openBtn.addEventListener("click", openFunc)
closeBtn.addEventListener("click", closeFunc)