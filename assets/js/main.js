
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

iconMenu.addEventListener ("click", () => 
    menu.classList.toggle("active")
);


/*===========================carrito de compras=========================*/

/*

const totalCarrito = [ 1, 5, 10, 15]

const retornoReduce = totalCarrito.reduce( (acumulador, numActual, indice, arreglo) => acumulador + numActual);

console.log(retornoReduce);

*/