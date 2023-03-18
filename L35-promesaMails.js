function sendEmail(email, subject, body) {
    // creación y retorno "inmediato" de la promesa
    return new Promise((resolve, reject) => {
        // validación de exitencia de los elementos
        if (!email || !subject || !body)
            // creación del error y ejecución de reject
            reject(new Error("Hacen falta campos"))
        // declaración del temporizador y ejecución del resolve
        window.setTimeout(() => {
            resolve({ email, subject, body })
        },2000)
    })
}