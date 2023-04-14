const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value ) + 1
})

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1
})

// const robotron = document.querySelector("#robotron")

// // robotron.addEventListener("click", dizOi)

// // robotron.addEventListener("click", function(){
// //     console.log("Cliquei no Robô.")
// // })

// robotron.addEventListener("click", () => {
//     console.log("Cliquei no robô.")
// })

// // function dizOi () {
// //     console.log("oi")
// //     console.log("Bem-vindo ao Robotron 2000")
// // }

// // dizOi() 

// function dizOi (nome) {
//     console.log("Oi " +nome)
//     console.log("Bem-vindo ao Robotron 2000")
// }

// dizOi("Fernando") 