let  shoppingCard2=JSON.parse(localStorage.getItem("CAR"))||[]
const pEnvio =document.querySelector("#precioEnvio")
let envioLocal = localStorage.getItem("precioEnvio")*1
let pedidoGratis=localStorage.getItem("PrecioEnvio")
let productBox22 = document.querySelector(".productsShop")
let subtotalPrint = document.querySelector("#subtotalPrint")
let totalPrint = document.querySelector("#totalPrint")


subtotalPrint.innerHTML=localStorage.getItem("SUBTOTAL")+",00€"
pEnvio.innerHTML=localStorage.getItem("PrecioEnvio")
totalPrint.innerHTML=localStorage.getItem("TOTAL")+",00€"

const backToShop =document.querySelector("#backToShop")
backToShop.addEventListener("click", eraseLocal)


function eraseLocal (event) {
    event.preventDefault()
    localStorage.clear()
    location.href="../index.html"
}

const drawProductsBasket =() =>{
    productBox22.innerHTML=""
    shoppingCard2.forEach((product)=>{
        let carContent33 =document.createElement("div")
        carContent33.className="row productStyle"
        carContent33.innerHTML=`
        <div class="col-9 productImg">
        <img src=${product.img} class="shopping-cart-image imgInBasket imgSucces">
        <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${product.name}</h6>
        </div>
        <div class="col-3 totalEachProducts">
        <p class="totalProduct11">${product.cuantity * product.price},00€<p>
        </div>
        `;
        
        productBox22.append(carContent33)
    })
}


window.addEventListener("load", drawProductsBasket)