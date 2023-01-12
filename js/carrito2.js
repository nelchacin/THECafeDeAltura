const seeTheCar = document.getElementById("bagIcon")
const drawTheCar =() =>{
    shopBox.innerHTML=""
    shopBox.style.display ="flex"
    const cardBox= document.createElement("div")
    cardBox.setAttribute("class","totalDown")
    cardBox.innerHTML =`<h6 class="tittleCar">CARRITO</h6>`
    shopBox.append(cardBox)
    const shopButton = document.createElement("a")
    shopButton.innerText ="X"
    shopButton.className ="shopButton"

    shopButton.addEventListener("click", ()=>{
        shopBox.style.display ="none"
    })

    cardBox.append(shopButton)

    shoppingCard2.forEach((product)=>{
    let carContent =document.createElement("div")
    carContent.className="row shoppingCartItem"
    carContent.innerHTML=`<div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${product.img} class="shopping-cart-image">
                 <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${product.name}</h6>
            </div>
         </div>
         <div class="col-2">
             <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                 <p class="item-price mb-0 shoppingCartItemPrice">${product.price},00€</p>
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


    shopBox.append(carContent)

})
const total = shoppingCard2.reduce((acc,the)=>acc +the.price, 0)
const totalBuying = document.createElement("div")
totalBuying.className="totalBuying"
totalBuying.innerHTML = `<p>TOTAL: ${total},00</p>`
shopBox.append(totalBuying)
}
seeTheCar.addEventListener("click",drawTheCar)





    
