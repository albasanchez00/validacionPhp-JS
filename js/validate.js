//Funcion para estas declaraciones -> onsubmit="return calidateForm()" novalidate
//
// function validateForm(){
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//
//     //Validar que los campos no estén vacíos.
//     if (username.trim() === "" || password.trim() === ""){
//         alert("Por favor, rellene todos los campos.")
//         return false;
//     }
//
//     //Ejemplo de validación adicional: longitud minima de la contraseña.
//     if (password.length < 8){
//         alert("La contraseña debe tener al menos 8 caracteres")
//         return false;
//     }
//
//     //Si todas las validaciones pasan, se puede enviar el formulario.
//     return true;
// }

window.onload=()=>{ //Funcion de flecha en JavaScript
    'use strict'; //se ejecuta de forma estricta (activa), evitando posibles errores JavaScript

    //Selecciona el formulario que tiene la clase .needs-validation y devuelve un array(NodeList).
    let forms = document.querySelectorAll('.needs-validation')

    //Se recorre todos estos elementos del Form.
    Array.from(forms).forEach(form =>{
        //Se crea un evento de escucha cuaando se pulsa el submit, ejecutando la validación.
        form.addEventListener('submit', event =>{
            if (!form.checkValidity()){ // *Opcional* -> Evento checkValidity() verifica que el formulario sea correcto (recoge los datos introducidos).
                event.preventDefault() // Detiene la ejecución del formulario.
                event.stopPropagation() // No se ejecuta el action.
            }

            // form.classList.add('was-validated')
        }, false) //Significa que se ejecuta esta función en el momento que haces clic.
    })
}