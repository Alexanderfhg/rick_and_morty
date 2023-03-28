export default function validate(objInputs) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass = /\d+/;
    let errors = {};

    if (!objInputs.email) {
        errors.mail = 'Se requiere un email';

    } else if (!regexEmail.test(objInputs.email)) {
        errors.mail = 'Ingresa un email valido';
    } else if (objInputs.email.length > 35){
        errors.mail = 'Máximo 35 carácteres'
    }
    if (objInputs.password.length < 6 || objInputs.password.length > 10) {
        errors.password = "Debe contener entre 6 y 10 carácteres"
    } else if (!regexPass.test(objInputs.password)) {
        errors.password = "Al menos un número"
    }
    return errors;
}