export default function initMenuToggle(){
    const menuIcon = document.querySelector(".header__icon");
    const menuBox = document.querySelector(".menu");
    const menuClose = document.querySelector(".menu__close");
    const menuLink = document.querySelectorAll(".menu__link");

    function handleMenu(){
        if(menuClose.classList.contains("inactive")){
            menuStart();
        }else{
            menuExit();
        }
    }
    
    function menuStart(){
        menuClose.classList.remove("inactive");
        menuClose.style.padding = "10px";
        menuBox.style.animation = "animaMenu .3s forwards";
    }

    function menuExit(){
        menuClose.classList.add("inactive");
        menuBox.style.animation = "recuaMenu .3s forwards";
    }

    menuIcon.addEventListener("touchstart",handleMenu);
    menuClose.addEventListener("touchstart",menuExit);
    menuLink.forEach((item)=>{
        item.addEventListener("touchstart",()=>{
            const myTimer = setTimeout(menuExit,100);
        })
    })
}