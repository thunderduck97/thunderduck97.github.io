const username_administrador = "grupoadventista@gmail.com";
const password_administrador = "Ima33789*";

const username_institucion = "AdministracionIMASC@gmail.com";
const password_institucion = "Ima33789*";
let form = document.getElementById('form')




function valida(event) {
	event.preventDefault();
	var xemail = document.getElementById('email').value;
	var xcontra = document.getElementById('password').value;

	const contra = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,15}$/;

	var correoElectronico = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

	if (xemail === "") {
		return alert('Completar todos los Campos');

	}
	if (!correoElectronico.test(xemail)) {
		return alert('Email no valido');

	}

	if (!xcontra.match(contra)) {
		return alert('El Password debe contener de 6 a 15 caracteres incluyendo minusculas, al menos una mayuscula, al menos un caracter especial y  numeros ');
	}


	if(xemail === username_administrador && xcontra === password_administrador){
		localStorage.setItem("activo",true)
		localStorage.setItem("status","admin")
		location.href = "../html/index.html";
		return alert('Ha iniciado Sesion');

	} else if (xemail === username_institucion && xcontra == password_institucion) {
		localStorage.setItem("activo",true)
		localStorage.setItem("status","administracion")
		location.href = "../html/index.html";
		return alert('Ha iniciado Sesion');
	}else if (xemail !== localStorage.getItem("email") && xcontra !==  localStorage.getItem("password")){
		return alert("usuario o contraseña incorrectas")
	}


	location.href = "../html/index.html";

}

form.onsubmit = valida
