function validateForm(formData, registeredUsers) {
    
    // cadena y arreglo de apoyo
    let ERROR_MSG = "Faltan los siguientes campos requeridos: ";
    let missingArray = [];
    // recorrer el objeto del input y si la key no existe, hacer push de esa key al arreglo de missing
    for (let key in formData)
        if (!formData[key]) missingArray.push(key);
    // si el arreglo de missing contiene elementos -> unir la info y arrojar el error
    if (missingArray.length > 0) {
        throw new Error(ERROR_MSG + missingArray.join(", "));
    }
    // recorre el arreglo de users y si algun mail coincide lanza el error
    if (registeredUsers.some(u => u.email == formData.email))
        throw new Error(`El email ${formData.email} ya está en uso`);
    // limpiar y cargar el nuevo usuario
    delete formData.password;
    registeredUsers.push(formData)
    // mensaje de éxito
    return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;

}