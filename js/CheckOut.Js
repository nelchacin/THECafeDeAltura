const subTotal = localStorage.getItem("TOTAL")*1
const subTotalText = document.querySelector("#subtotalPrint")
const totalText=document.querySelector("#totalPrint")
const Iva= document.querySelector("#IVA")
subTotalText.innerHTML=`${subTotal},00`
totalText.innerHTML=`${subTotal},00`
Iva.innerHTML=`Incluye ${(subTotal*0.21).toFixed(2)} de IVA`
subTotal.toFixed(2)


const pEnvio2 =document.querySelector("#precioEnvio")
let envioLocal2 = localStorage.getItem("precioEnvio")*1
let pedidoGratis2="GRATIS"

if (envioLocal2===0){
    pEnvio2.innerHTML=`${pedidoGratis2}`
}
if (envioLocal2==9){
    pEnvio2.innerHTML=`${envioLocal2},00`
}


        
//carrito
updateShoppingCartTotal()
const selectorButtons = document.querySelectorAll('.btn');
const ShoppingCardItemsContainer = document.querySelector('.shoppingCard')
const buttonBag = document.querySelector('#buttonBag')
const firstShop = document.querySelector('.firstDivCart')
const tittleProduct = document.querySelector('.card-title')
const priceProduct = document.querySelector('.price')
const imgProduct = document.querySelector('.imgSec4')

function addToCardClicked(event) {
    event.preventDefault()
    const button = event.target;
    const item = button.closest('.card-body');

    const tittleProduct = item.querySelector('.card-title').textContent;
    const priceProduct = item.querySelector('.price').textContent * 1;
    const imgProduct = item.querySelector('.imgSec4').src;

    addItemtoShoppingCard(tittleProduct, priceProduct.toFixed(2), imgProduct)

}

function addItemtoShoppingCard(tittleProduct, priceProduct, imgProduct) {

    const elementsTitle = ShoppingCardItemsContainer.getElementsByClassName('shoppingCartItemTitle')
    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === tittleProduct) {
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
            elementQuantity.value++;
            updateShoppingCartTotal()
            return
        }
    }
    const shoppingCardTotal= document.querySelector(".shoppBox")
    const shoppingCardRow = document.createElement('div')
    shoppingCardRow.setAttribute("class","totaldown")
    shoppingCardRow.classList.add("itemInTheCard")

    const shoppingCardContent = `
    <div class="row shoppingCartItem">
    <div class="col-6 ">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${imgProduct} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${tittleProduct}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${priceProduct}€</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;

    shoppingCardRow.innerHTML = shoppingCardContent
    ShoppingCardItemsContainer.appendChild(shoppingCardRow).appendChild(shoppingCardTotal)
    updateShoppingCartTotal()

    shoppingCardRow
        .querySelector('.buttonDelete')
        .addEventListener('click', removeShoppingCartItem);
    updateShoppingCartTotal()

    shoppingCardRow.querySelector('.shoppingCartItemQuantity')
        .addEventListener('change', quantityChanged);
       
}

function updateShoppingCartTotal() {
    const checkOutB= document.querySelector(".checkOutB")
    let total = localStorage.getItem("TOTAL")*1
    const shoppingCartTotal = document.querySelector('.totalPrice')
    shoppingcartItems = document.querySelectorAll('.shoppingCartItem')
    shoppingcartItems.forEach(shoppingCartItem => {
        const shoppingCartItemElement = shoppingCartItem.querySelector('.shoppingCartItemPrice')
        const shoppingCartItemPrice = Number(shoppingCartItemElement.textContent.replace('€', ''))
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity')
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value)
        total = localStorage.getItem("TOTAL")*1 + shoppingCartItemPrice * shoppingCartItemQuantity
        total.toFixed(2)
        

        
    })
    shoppingCartTotal.innerHTML = `${total}`

   

}
function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal()

}

function quantityChanged(event) {
    const input = event.target
    input.value <= 0 ? (input.value = 1) : null
    updateShoppingCartTotal()
}


buttonBag.onclick = (e) => {

    if (ShoppingCardItemsContainer.style.display === 'none') {
        ShoppingCardItemsContainer.style.display = 'Block'

    } else {
        ShoppingCardItemsContainer.style.display = 'none'
    }
}




buttonBag.onclick = (e) => {

    if (ShoppingCardItemsContainer.style.display === 'none') {
        ShoppingCardItemsContainer.style.display = 'Block'

    } else {
        ShoppingCardItemsContainer.style.display = 'none'
    }
}


//llamadas radios

let transferBizum = document.querySelectorAll(".transferBizum")
let tarjetaBizum =document.querySelectorAll(".tarjetaBizum")
let transTar= document.querySelectorAll(".transTar")
let creditcard= document.querySelectorAll(".creditcard")
let transfer =document.querySelectorAll(".transfer")
let bizum=document.querySelectorAll(".bizum2")

let radioButtons=document.querySelectorAll(".radioPago")
console.log(radioButtons);
precioEnvio=document.querySelector("#precioEnvio")


let findSelected =() =>{
    let selected = document.querySelector("input[name='exampleRadios']:checked").value*1
   if(selected===1){
    transferBizum.forEach(elem=>{
        elem.style.opacity=("60%")
        

    })
    creditcard.forEach(elem=>{
        elem.style.opacity=("100%")
        

    })
    let formValidationCredit = (e) => {

    }
    
   }
   if(selected===2){
    tarjetaBizum.forEach(elem=>{
        elem.style.opacity=("60%")
        

    })
    transfer.forEach(elem=>{
        elem.style.opacity=("100%")
        

    })
   }
   if(selected===3){
    transTar.forEach(elem=>{
        elem.style.opacity=("60%")
        

    })
    bizum.forEach(elem=>{
        elem.style.opacity=("100%")
        

    })
    

   }
}

radioButtons.forEach(radioBtn=>{
    radioBtn.addEventListener("change",findSelected)
})
