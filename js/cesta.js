let radioButtons=document.querySelectorAll(".radioEnvio")
precioEnvio=document.querySelector("#precioEnvio")
const precioGratis = "GRATIS"
let totalB = localStorage.getItem("TOTAL")*1

let findSelected =() =>{
    let selected = document.querySelector("input[name='exampleRadios']:checked").value*1
   localStorage.setItem("precioEnvio",selected)
   if(selected===0){
    precioEnvio.innerHTML=`${precioGratis}`
   }
   if(selected===9){
    precioEnvio.innerHTML=`${selected},00`
    // let shoppingCardTotal= document.querySelector('.totalPrice')
    // let shoppingCardTotal2=totalB+selected
    // localStorage.setItem("TOTAL",shoppingCardTotal2)

    // shoppingCardTotal.innerHTML=`${shoppingCardTotal2}`
    

    
   }
}

radioButtons.forEach(radioBtn=>{
    radioBtn.addEventListener("change",findSelected)
})
