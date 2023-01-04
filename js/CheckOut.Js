const subTotal = localStorage.getItem("TOTAL")*1
const subTotalText = document.querySelector("#subtotalPrint")
const totalText=document.querySelector("#totalPrint")
const Iva= document.querySelector("#IVA")
subTotalText.innerHTML=`${subTotal},00`
totalText.innerHTML=`${subTotal},00`
Iva.innerHTML=`Incluye ${subTotal*0.21} de IVA`

if(subTotal===0){
    Iva.innerHTML=``
}