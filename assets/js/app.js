// !show menu

const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId);
     nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener("click",()=>{
            nav.classList.toggle("show");
        });
    }
}

showMenu('nav_toggle','nav_menu')


// Active & remove Active

const nav_link = document.querySelectorAll('.nav_link');

// console.log(nav_link);
nav_link.forEach(n => n.classList.remove('active'))
function linkedaction(){
    nav_link.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const nav_menu=document.getElementById("nav_menu");

    nav_menu.classList.remove('show')

}

nav_link.forEach(n => n.addEventListener('click',linkedaction))
