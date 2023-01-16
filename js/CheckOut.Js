const subTotal = localStorage.getItem("TOTAL")*1
const subTotalText = document.querySelector("#subtotalPrint")
const totalText=document.querySelector("#totalPrint")
const Iva= document.querySelector("#IVA")
subTotalText.innerHTML=localStorage.getItem("SUBTOTAL")+ ",00€"
totalText.innerHTML=localStorage.getItem("TOTAL")+ ",00€"
Iva.innerHTML=`Incluye ${(subTotal*0.21).toFixed(2)} de IVA`
subTotal.toFixed(2)


const pEnvio2 =document.querySelector("#precioEnvio")
let pedidoGratis2=localStorage.getItem("PrecioEnvio")

    pEnvio2.innerHTML=`${pedidoGratis2}`


        


//llamadas radios

let transferBizum = document.querySelectorAll(".transferBizum")
let tarjetaBizum =document.querySelectorAll(".tarjetaBizum")
let transTar= document.querySelectorAll(".transTar")
let creditcard= document.querySelectorAll(".creditcard")
let transfer =document.querySelectorAll(".transfer")
let bizum=document.querySelectorAll(".bizum2")
pagarPedido=document.querySelector("#pagarPedido")






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
