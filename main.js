const burger = document.getElementById("burger")

const clickedMenu = document.getElementById('menu')

let hidden = false;

burger.addEventListener('click', toggleClass)

function toggleClass(){
    console.log("A burger was just clicked! Order Up!")
    if(!hidden) {
        clickedMenu.classList.add('hidden');
        hidden = true;
    }else {
        clickedMenu.classList.remove('hidden');
        hidden =false;
    }
}