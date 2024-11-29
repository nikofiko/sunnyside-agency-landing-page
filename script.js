const menuButton = document.querySelector(".menu")
const menu = document.querySelector(".menu-div")

menuButton.addEventListener("click", ()=> {
    if(menu.style.display === "none" || menu.style.display === ""){
        menu.style.display = "block";
    }else if(menu.style.display === "block"){
        menu.style.display = "none";
    }
})