const pEnvio =document.querySelector("#precioEnvio")
let envioLocal = localStorage.getItem("precioEnvio")*1
let pedidoGratis="GRATIS"

if (envioLocal===0){
    pEnvio.innerHTML=`${pedidoGratis}`
}
if (envioLocal==9){
    pEnvio.innerHTML=`${envioLocal},00`
}

const backToShop =document.querySelector("#backToShop")
backToShop.addEventListener("click", eraseLocal)


function eraseLocal (event) {
    event.preventDefault()
    localStorage.clear()
    location.href="../index.html"
}