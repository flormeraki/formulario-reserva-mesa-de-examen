let alumnos = [{
	nombre: "Flor Meraki",
	email: "mfmaguna@gmail.com",
	materia: "Filosofía"
},{
	nombre: "Olivia",
	email: "olivia@gmail.com",
	materia: "Matemática"
},{
	nombre: "Pocoyó",
	email: "pocoyo@gmail.com",
	materia: "Inglés"
},{
	nombre: "Minzie",
	email: "minzie@gmail.com",
	materia: "Música"
},{
	nombre: "Salvatore",
	email: "salvatore@gmail.com",
	materia: "Geografía"
}];
const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");
for (alumno in alumnos){
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let email = datos["email"];
	let materia = datos["materia"];
	let htmlCode = `		
	<div class="grid-item nombre">${nombre}</div>
	<div class="grid-item email">${email}</div>
	<div class="grid-item materia">${materia}</div>
	<div class="grid-item semana">
		<select class= "semana-elegida">
			<option value="Semana 1">Semana 1</option>
			<option value="Semana 2">Semana 2</option>
		</select>
	</div>`;
	contenedor.innerHTML+= htmlCode;
}

boton.addEventListener("click",()=>{
let confirmar = confirm("Realmente quiere confirmar las mesas?");
if (confirmar) {
	document.body.removeChild(boton)
	let elementos = document.querySelectorAll(".semana");
	let semanasElegidas = document.querySelectorAll(".semana-elegida");
	for (elemento in elementos){
		semana = elementos[elemento];
		semana.innerHTML = semanasElegidas[elemento].value;
	}
}
})