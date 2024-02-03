let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
let regexPassword = /^.{6,15}$/;
let regexDescription = /^.{5,250}$/;
let regexDescription2 = /^.{10,250}$/;

export const validationsFormComment = (form) => {
    let errors = {};

    if (!form.name.trim()) {
        delete errors.submit;
        errors.name = "El campo 'Nombre' es requerido.";
    }
    else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco.";
    }

    if (!form.description.trim()) {
        delete errors.submit;
        errors.description = "El campo 'Descripción' es requerido.";
    } 
    else if (!regexDescription.test(form.description.trim())) {
        errors.description = "El campo 'Descripción' debe tener mínimo 5 carácteres.";
    }

    return errors;
}


export const validationsFormContact= (form) => {
    let errors = {};

    if (!form.name.trim()) {
        delete errors.submit;
        errors.name = "El campo 'Nombre' es requerido.";
    }
    else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco.";
    }

    if (!form.last_name.trim()) {
        delete errors.submit;
        errors.last_name = "El campo 'Apellido' es requerido.";
    }
    else if (!regexName.test(form.last_name.trim())) {
        errors.last_name = "El campo 'Apellido' solo acepta letras y espacios en blanco.";
    }

    if (!form.email.trim()) {
        delete errors.submit;
        errors.email = "El campo 'Correo electrónico' es requerido.";
    }
    else if (!regexEmail.test(form.email.trim())) {
        errors.email = "Por favor ingresa un correo electrónico válido.";
    }

    if (!form.description.trim()) {
        delete errors.submit;
        errors.description = "El campo 'Asunto' es requerido.";
    } 
    else if (!regexDescription2.test(form.description.trim())) {
        errors.description = "El campo 'Asunto' debe tener mínimo 10 carácteres.";
    }

    return errors;
}