let posicionActual_productos = 0;
let ancho_productos;
const productosInner = document.getElementById('productos-inner');
let totalProductos;

let posicionActual_articulos = 0;
let ancho_articulos;
const articulosInner = document.getElementById('articulos-inner');
let totalArticulos;

function ajustarAnchoProducto() {

    if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1024px)").matches) {
        ancho_productos = 220;
        ancho_articulos = 220;
        totalProductos = productosInner.children.length -2
        totalArticulos = articulosInner.children.length -2
    }

    else if (window.matchMedia("(max-width: 767px)").matches) {
        ancho_productos = 320;
        ancho_articulos = 320;
        totalProductos = productosInner.children.length 
        totalArticulos = articulosInner.children.length
    }
 
    else {
        ancho_productos = 220;
        ancho_articulos = 220;
        totalProductos = productosInner.children.length -3
        totalArticulos = articulosInner.children.length -3
    }
}

ajustarAnchoProducto();

function moverCarrusel(direccion) {
    if (direccion === 'productos-siguiente') {
        posicionActual_productos = (posicionActual_productos + 1) % totalProductos;
    } else if (direccion === 'productos-anterior') {
        posicionActual_productos = (posicionActual_productos - 1 + totalProductos) % totalProductos;
    } else 
    
    if (direccion === 'articulos-siguiente') {
        posicionActual_articulos = (posicionActual_articulos + 1) % totalArticulos;
    } else if (direccion === 'articulos-anterior') {
        posicionActual_articulos = (posicionActual_articulos - 1 + totalArticulos) % totalArticulos;
    }

    const desplazamiento_productos = -posicionActual_productos * ancho_productos;
    const desplazamiento_articulos = -posicionActual_articulos * ancho_articulos;
    articulosInner.style.transform = `translateX(${desplazamiento_articulos}px)`;
    productosInner.style.transform = `translateX(${desplazamiento_productos}px)`;

}

window.addEventListener('resize', () => {
    ajustarAnchoProducto();
    moverCarrusel('productos-siguiente');
    moverCarrusel('articulos-siguiente');
});

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("show");
  }

window.addEventListener("resize", function() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (window.innerWidth > 768) {
      dropdownMenu.classList.remove("show");
    }
});
