
document.addEventListener( "DOMContentLoaded", () =>{
    load()
})

/* =========== LOADER ========== */

const loader = document.getElementById( "loader" )
function load () {
    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 2000);
}

/*==================== MENU =====================*/

const menu = document.querySelector("ul.nav-menu");
const iconMenu = document.getElementById("icon-menu");
const itemMenu1 = document.getElementById("url1");
const itemMenu2 = document.getElementById("url2");
const itemMenu3 = document.getElementById("url3");
const itemMenu4 = document.getElementById("url4");
const itemMenu5 = document.getElementById("url5");
const itemMenu6 = document.getElementById("url6");

iconMenu.addEventListener ("click", () => 
    menu.classList.toggle("active")
);

itemMenu1.addEventListener ( "click" , () =>
    menu.classList.remove("active")
);

itemMenu2.addEventListener ( "click" , () =>
    menu.classList.remove("active")
);

itemMenu3.addEventListener ( "click" , () =>
    menu.classList.remove("active")
);

itemMenu4.addEventListener ( "click" , () =>
    menu.classList.remove("active")
);

itemMenu5.addEventListener ( "click" , () =>
    menu.classList.remove("active")
);

itemMenu6.addEventListener ( "click" , () =>
    menu.classList.remove("active")
);
const navBar = document.getElementById("nav-container")

window.addEventListener( "scroll", () =>{
    if( window.scrollY >= 50 ){
        navBar.classList.add("scroll-header")
    }else{
        navBar.classList.remove("scroll-header")
    }
})



/*===========================carrito de compras=========================*/

/*

const totalCarrito = [ 1, 5, 10, 15]

const retornoReduce = totalCarrito.reduce( (acumulador, numActual, indice, arreglo) => acumulador + numActual);

console.log(retornoReduce);

*/