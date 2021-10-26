
let formulario = document.getElementById('formulario');
let url = 'http://localhost:4002/usuarios'

formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;

    await fetch(url,{
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

