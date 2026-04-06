function creaLanciaDado() {
    let ultimoLancio = null;

    return function () {
        return new Promise((resolve, reject) => {
            console.log("Sto lanciando il dado...")
            setTimeout(() => {
                const incastrato = Math.random() < 0.2;
                if (incastrato) {
                    ultimoLancio = null;
                    return reject("Il dado si è incastrato")
                }
                else {
                    const valore = Math.floor(Math.random() * 6) + 1;
                    if (valore === ultimoLancio) {
                        console.log("Incredibile è uscito lo stesso numero!")
                    }
                    ultimoLancio = valore;
                    resolve(valore);
                }

            }, 300);
        })
    }
}

const dadoLanciato = creaLanciaDado();

dadoLanciato()
    .then(risultato => {
        console.log(`Il dado ha lanciato:`, risultato)
        dadoLanciato()
            .then(risultato => console.log(`Il dado ha lanciato:`, risultato))
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));