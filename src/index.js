function ochoSegundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa ejecutada despues de ocho segundo")
        }, 8000)
    })
}
console.log(ochoSegundos()
    .then((resultado) => {
        console.log(resultado)
    })
)