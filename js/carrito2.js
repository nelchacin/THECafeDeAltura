
const drawTheCar =() =>{
    shopBox.innerHTML=""
    const cardBox= document.createElement("div")
    cardBox.setAttribute("class","totalDown")
    cardBox.innerHTML =`<h6 class="tittleCar">CARRITO</h6>`
    shopBox.append(cardBox)
    const shopButton = document.createElement("a")
    shopButton.innerText ="X"
    shopButton.className ="btn btn-danger buttonDelete"

    shopButton.addEventListener("click", ()=>{
        shopBox.style.display ="none"
    
    })

    cardBox.append(shopButton)

    shoppingCard2.forEach((product)=>{
    let carContent =document.createElement("div")
    carContent.className="row shoppingCartItem"
    carContent.innerHTML=`
    <div class="col-6 available">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${product.img} class="shopping-cart-image">
                 <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${product.name}</h6>
                 </div>
                 </div>
                 <div class="col-6">
                 <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                 <button class="sum btnRestSum">+</button>
                 <p class="cuantity mb-0 shoppingCartItemPrice">${product.cuantity}<p> 
                 <button class="rest btnRestSum">-</button>
                 <p class="item-price shoppingCartItemPrice22">${product.price},00€</p>
                 <button class="btn btn-danger buttonDelete buttonDelete2" type="button">X</button>
                 </div>
         </div>
         
    
             `;

    shopBox.append(carContent)
    let rest = carContent.querySelector(".rest")
    rest.addEventListener("click",() =>{
        if(product.cuantity !==1){
            product.cuantity --;
        }
        saveLocal()
        drawTheCar();
    })

    let sum = carContent.querySelector(".sum")
    sum.addEventListener("click",() =>{
        product.cuantity ++
        saveLocal()
        drawTheCar();
    })

    let DeleteButton = carContent.querySelector(".buttonDelete2")
    DeleteButton.addEventListener("click", () =>{
        eraseButton2(product.id);

    })

    

    // let boxOfButton =document.createElement("div")
    // boxOfButton.className="col-4"
    // carContent.append(boxOfButton)
    // cardCuantityandButton= document.createElement("div")
    // cardCuantityandButton.className="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3"
    // boxOfButton.append(cardCuantityandButton)
    // let cuantityCar=document.createElement("p")
    // cuantityCar.innerText=product.cuantity
    // cardCuantityandButton.append(cuantityCar)
    // let totalForEachProduct= document.createElement("p")
    // totalForEachProduct.innerText="Total: "+ product.cuantity * product.price
    // cardCuantityandButton.append(totalForEachProduct)

    // let eraseButton = document.createElement("button")
    // eraseButton.innerText= "X"
    // eraseButton.className="btn btn-danger buttonDelete"
    // cardCuantityandButton.append(eraseButton)
    
    // eraseButton.addEventListener("click",eraseButton2)
    
    
    
    
})
const total = shoppingCard2.reduce((acc,the)=>acc + the.price *the.cuantity, 0)
const totalBuying = document.createElement("div")
totalBuying.className="totalBuying"
totalBuying.innerHTML = `
<a class="cesta" href="./html/Cesta.html">Cesta</a>
<p class="cesta">TOTAL: ${total},00€</p>`
shopBox.append(totalBuying)
localStorage.setItem("SUBTOTAL",total)


}
seeTheCar.addEventListener("click",drawTheCar)


const eraseButton2 = (id) =>{
    
    const foundId = shoppingCard2.find((product)=>product.id===id);
    shoppingCard2=shoppingCard2.filter((carId)=>{
        return carId !== foundId
        
    })
    carCounter ()
    saveLocal()
    drawTheCar()
    
}

const carCounter= () =>{
    cuantityCar.style.opacity= ("100%")
    const carLength = shoppingCard2.length
    localStorage.setItem("CarLength",JSON.stringify(carLength))
    cuantityCar.innerText= JSON.parse(localStorage.getItem("CarLength"))
    if(shoppingCard2.length===0){
        cuantityCar.style.opacity= ("0%")   
    }
}
carCounter ()






    
