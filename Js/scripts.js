

  // Tabla
function eliminarFila(icono) {
  const confirmar = confirm("¿Estás seguro de que deseas eliminar este registro?");
  if (confirmar) {
    const fila = icono.closest('tr');
    fila.remove();
  }
}

function verPersona(icono) {
  const fila = icono.closest('tr');
  const celdas = fila.querySelectorAll('td');
  const cedula = celdas[0].textContent;
  const nombre = celdas[1].textContent;
  const apellido = celdas[2].textContent;
  const fecha = celdas[3].textContent;

  alert(`Datos de la persona:\n\nCédula: ${cedula}\nNombre: ${nombre}\nApellido: ${apellido}\nFecha de nacimiento: ${fecha}`);
}



  // Formulario
function calcularEdad(fechaNacStr) {
  const [año, mes, dia] = fechaNacStr.split('-').map(Number);
  const hoy = new Date();
  let edad = hoy.getFullYear() - año;

  if (
    hoy.getMonth() + 1 < mes ||
    (hoy.getMonth() + 1 === mes && hoy.getDate() < dia)
  ) {
    edad--;
  }

  return edad;
}

function agregarFila() {
  const cedula = document.getElementById('cedula').value.trim();
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;

  if (!cedula || !nombre || !apellido || !fechaNacimiento) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const edad = calcularEdad(fechaNacimiento);

  const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
  const nuevaFila = tabla.insertRow();

  nuevaFila.insertCell(0).textContent = cedula;
  nuevaFila.insertCell(1).textContent = nombre;
  nuevaFila.insertCell(2).textContent = apellido;
  nuevaFila.insertCell(3).textContent = fechaNacimiento;
  nuevaFila.insertCell(4).textContent = edad + " años";

  const celdaAcciones = nuevaFila.insertCell(5);
  const icono = document.createElement('i');
  icono.className = "fas fa-trash icono-eliminar";
  icono.title = "Eliminar";
  icono.onclick = function () {
    const confirmar = confirm("¿Estás seguro de que deseas eliminar este registro?");
    if (confirmar) {
      tabla.deleteRow(nuevaFila.rowIndex - 1);
    }
  };
  celdaAcciones.appendChild(icono);


  document.getElementById('cedula').value = "";
  document.getElementById('nombre').value = "";
  document.getElementById('apellido').value = "";
  document.getElementById('fechaNacimiento').value = "";
}



  // Operaciones
function calcular() {
  let num1 = parseFloat(document.getElementById('numero1').value) || 0;
  let num2 = parseFloat(document.getElementById('numero2').value) || 0;
  let operacion = document.getElementById('operacion').value;
  let resultado;

  switch (operacion) {
    case 'sumar':
      resultado = num1 + num2;
      break;
    case 'restar':
      resultado = num1 - num2;
      break;
    case 'multiplicar':
      resultado = num1 * num2;
      break;
    case 'dividir':
      resultado = num2 !== 0 ? (num1 / num2) : "Error: División por cero";
      break;
    default:
      resultado = "Operación inválida";
  }

  document.getElementById('resultado').value = resultado;
}


  // Suma
function sumar() {
  let num1 = parseFloat(document.getElementById('numero1').value) || 0;
  let num2 = parseFloat(document.getElementById('numero2').value) || 0;
  let suma = num1 + num2;

  document.getElementById('resultado').value = suma;
}
