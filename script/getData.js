let btnAdidas = document.getElementById('btnadidas');
let btnNike = document.getElementById('btnnike');

btnAdidas.addEventListener('click', ()=>{
    getZapatillas('http://localhost:4000/Adidas')
});

btnNike.addEventListener('click', ()=>{
    getZapatillas('http://localhost:4001/Nike')
});

const getZapatillas = async (url)=>{
    let mostrarProductos  = document.querySelector('.grid-zapatillas');
    mostrarProductos.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach(producto  => {
        const {imagen, referencia, estilo} = producto;
        mostrarProductos.innerHTML +=
        `<div class="col zapatillas">
        <a href="#" class="enlace-detalle-producto">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${referencia}</h5>
                        <p class="card-text body2Regular">${estilo}</p>
                </div>
            </div>
        </a>
    </div>
    `
        
        
    });

}

