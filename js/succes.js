let  shoppingCard2=JSON.parse(localStorage.getItem("CAR"))||[]
const pEnvio =document.querySelector("#precioEnvio")
let envioLocal = localStorage.getItem("precioEnvio")*1
let pedidoGratis=localStorage.getItem("PrecioEnvio")

pEnvio.innerHTML=localStorage.getItem("PrecioEnvio")

const backToShop =document.querySelector("#backToShop")
backToShop.addEventListener("click", eraseLocal)


function eraseLocal (event) {
    event.preventDefault()
    localStorage.clear()
    location.href="../index.html"
}


window.addEventListener("load", drawProductsBasket)