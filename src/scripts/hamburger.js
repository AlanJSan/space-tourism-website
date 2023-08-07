const menu = document.querySelector('.menu');
document.querySelector(".hamburger").addEventListener("click", () => {
    menu.classList.toggle("invisible");
//    document.querySelector('body').classList.add("h-screen");
})

document.querySelector(".close").addEventListener("click", () =>{
        menu.classList.toggle("invisible");
})