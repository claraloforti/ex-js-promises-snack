function lanciaDado() {
    return new Promise((resolve, reject) => {
        console.log("Sto lanciando il dado...")
        setTimeout(() => {
            const incastrato = Math.random() < 0.2;
            if (incastrato) {
                return reject("Il dado si è incastrato")
            }
            else {
                const valore = Math.floor(Math.random() * 6) + 1;
                resolve(valore);
            }

        }, 3000);
    })
}

lanciaDado()
    .then(risultato => console.log(`Il dado ha lanciato:`, risultato))
    .catch(error => console.error(error));