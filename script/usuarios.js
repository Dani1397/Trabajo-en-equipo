
let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');
let btdEditar = document.getElementById('btnEditar');
let url = 'http://localhost:4002/usuarios/'

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            name,
            lastName,
            email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

})


btnCorreo.addEventListener('click', async () => {
    //Que voy a buscar     

    let email = document.getElementById('email').value;
    const datos = await fetch(url);
    const data = await datos.json();

    //como lo voy a buscar

    const busqueda = data.find(user => user.correo.toLowerCase === email.toLowerCase);
    document.getElementById('email').setAttribute("readonly",true);

    //Desestructuramos 

    const { nombre, apellido, correo, id } = busqueda;
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;

})

btnEditar.addEventListener('click', async () => {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let id = document.getElementById('id').value;

    await fetch(url + id, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            lastname,
            email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

})