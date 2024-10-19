const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agrego un curso se ejecuta "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//lee html y extrae info
function leerDatosCurso(curso) {
    console.log(curso);

    //objeto con contendo del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //Agrega elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    carritoHTML();
}

//Muestra el carrito en el html
function carritoHTML() {
    //Limpiar el HTML
    limpiarHTML();

    // rECORRE EL CARRITO Y GENERA HTNL
    articulosCarrito.forEach(curso => {
        // const { imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src ="${curso.imagen}" width="90" height="80"> 
        </td>
        <td>
        ${curso.titulo}
        </td>
        <td>
        ${curso.precio}
        </td>
        <td>
        ${curso.cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}" > X </a> 
        </td>
        `;
        //agrega el html del carrito en el boddy
        contenedorCarrito.appendChild(row)
    });
}

function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}