

let  shoppingCard2=JSON.parse(localStorage.getItem("CAR"))||[]
const seeTheCar = document.getElementById("bagIcon")
const cuantityCar =document.getElementById("cuatityCar2")
let shopBox= document.querySelector(".shoppBox")
let basketTittle = document.querySelector(".cestaTittle")
let subtotal= localStorage.getItem("SUBTOTAL")
let total22= document.querySelector("#totalPrint")
let subtotalPrint= document.querySelector("#subtotalPrint")
let carContent2 = document.querySelector(".carrito")
let iva= document.querySelector("#IVA")



let radioButtons=document.querySelectorAll(".radioEnvio")
precioEnvio=document.querySelector("#precioEnvio")
const precioGratis = "GRATIS"
const precioUrgente= 9

const drawProductsBasket =() =>{
    carContent2.innerHTML=""
    shoppingCard2.forEach((product)=>{
        let carContent22 =document.createElement("div")
        carContent22.className="row productStyle"
        carContent22.innerHTML=`
        <div class="col-3 cestaProducts">
        <button class="sum2 btnRestSum styleSum">+</button>
        <p class="cuantity mb-0 shoppingCartItemPrice2">${product.cuantity}<p> 
        <button class="rest2 btnRestSum">-</button>
        </div>
        <div class="col-6 productImg">
        <img src=${product.img} class="shopping-cart-image imgInBasket">
        <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${product.name}</h6>
        </div>
        <div class="col-3 totalEachProducts">
        <p class="totalProduct11">${product.cuantity * product.price},00€<p>
        <button class="btn btn-danger buttonDelete buttonDelete22" type="button">X</button>
        </div>
        
        <hr>
        
        
        `;
        
        carContent2.append(carContent22)
        let rest2 = carContent22.querySelector(".rest2")
        rest2.addEventListener("click",() =>{
            if(product.cuantity !==1){
                product.cuantity --;
            }
            saveLocal()
            drawProductsBasket ()
            findSelected ()
        })
        let sum2 = carContent22.querySelector(".sum2")
        sum2.addEventListener("click",() =>{
            product.cuantity ++
            saveLocal()
            drawProductsBasket ()
            findSelected ()
        })
        let DeleteButton2 = carContent22.querySelector(".buttonDelete22")
        DeleteButton2.addEventListener("click", () =>{
            eraseButton22(product.id);
            
        })
        
    })
    
    
    
    
}

let findSelected =() =>{
    const total33 = shoppingCard2.reduce((acc,the)=>acc + the.price *the.cuantity, 0)
    console.log(total33);
    let selected = document.querySelector("input[name='exampleRadios']:checked").value*1
    if(selected===0){
        precioEnvio.innerHTML=`${precioGratis}`
        subtotalPrint.innerHTML=`${total33},00`
        total22.innerHTML=`${total33},00`
        let total44=  localStorage.setItem("TOTAL",total33)
        let total55= localStorage.getItem("")
        let iva2=total33*0.21
        iva2.toFixed(2)
        iva.innerHTML= `Incluye ${iva2}€ de IVA`
        localStorage.setItem("IVA",iva2)
        localStorage.setItem("PrecioEnvio","GRATIS")
        
        
    }
    if(selected===9){
        precioEnvio.innerHTML=`${precioUrgente},00€`
        subtotalPrint.innerHTML=`${total33},00`
        total22.innerHTML=`${(total33*1)+9},00`
        let iva2=(total33*1)+9
        let iva3=(iva2*0.21)
       iva3.toFixed(2)
       console.log(iva3);

        iva.innerHTML= `Incluye ${iva3.toFixed(2)}€ de IVA`
        localStorage.setItem("IVA",iva3)
        let total44= localStorage.setItem("TOTAL",(total33*1)+9)
        localStorage.setItem("PrecioEnvio","9,00€")
        
    }
    // subtotal.innerHTML= localStorage.getItem("SUBTOTAL")*1
}

radioButtons.forEach(radioBtn=>{
    radioBtn.addEventListener("change",findSelected)
})

const saveLocal= () =>{localStorage.setItem("CAR",JSON.stringify(shoppingCard2)) }
seeTheCar.onclick = (e) => {

        if (shopBox.style.display === 'none') {
            shopBox.style.display = 'flex'
    
    
        } else {
            shopBox.style.display = 'none'
    
    }
}
const eraseButton22 = (id) =>{
    
    const foundId = shoppingCard2.find((product)=>product.id===id);
    shoppingCard2=shoppingCard2.filter((carId)=>{
        return carId !== foundId
        
    })
    carCounter22 ()
    saveLocal()
    drawProductsBasket ()
    findSelected ()
    basketNum ()
    
}

const carCounter22= () =>{
    const carLength22 = shoppingCard2.length
    localStorage.setItem("CarLength",JSON.stringify(carLength22))
    cuantityCar.innerText= JSON.parse(localStorage.getItem("CarLength"))
}
carCounter22 ()

const basketNum= () =>{
    let cuantityNum=localStorage.getItem("CarLength")*1
    basketTittle.innerHTML="Cesta "+"("+ cuantityNum+")"}
basketNum ()
window.addEventListener("load", drawProductsBasket)