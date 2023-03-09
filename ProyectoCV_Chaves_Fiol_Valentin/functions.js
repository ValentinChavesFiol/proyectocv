const nombreApellido = document.getElementById('nombreApellido');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const edad = document.getElementById('edad');
const direccion = document.getElementById('direccion');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const pinterest = document.getElementById('pinterest');
const linkedin = document.getElementById('linkedin');
const foto = document.getElementById('foto');

const perfilUsuario = async()=>{
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];

        nombreApellido.textContent = datos.name.first + " " + datos.name.last;
        fechaNacimiento.textContent = "Fecha de nacimiento: " + datos.dob.date;
        edad.textContent = " Edad: " + datos.dob.age
        direccion.textContent = "Dirección: " + datos.location.street.name + " n° " + datos.location.street.number + " - " + datos.location.city + "," + datos.location.country;
        email.textContent = "Email: " + datos.email;
        telefono.textContent = "Teléfono: " + datos.phone;

        foto.src = datos.picture.large;

        console.log(datos);
    } catch (error) {
        console.log(error);
    }
}

function abrirLink(idRed, url){
    document.getElementById(idRed).addEventListener('click', function(){
        window.open(url);
    });    
}

abrirLink('facebook', 'https://www.facebook.com/');
abrirLink('instagram', 'https://www.instagram.com/');
abrirLink('pinterest', 'https://ar.pinterest.com/');
abrirLink('linkedin', 'https://ar.linkedin.com/');



document.addEventListener('DOMContentLoaded', perfilUsuario);