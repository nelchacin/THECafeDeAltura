let  shoppingCard2=[]
let shopContent=document.getElementById("productShopContainer")
let seeTheCar = document.getElementById("bagIcon")
let boddy =document.querySelector(".body")
let shopBox= document.querySelector(".shoppBox")
console.log(seeTheCar);

axios
.get(`https://cafe-de-altura-api.vercel.app/api/products`)
.then(response=>{

const picturesCoffee =response.data.products
console.log(picturesCoffee);
picturesCoffee.slice(0,4).forEach (product=>{
       let content = document.createElement("div")
       content.setAttribute("class","col-3 card")
       content.setAttribute("style","width: 18rem;")
       content.innerHTML =
       `
       <div class="card-body"> 
       <img src= "${product.img_url}" class="imgSec4"  class="card-img-top" alt="Product green coffee">
        <h5 class="card-title">${product.brand}</h5>
        <p class="card-text"> <span class="price">${product.price}</span>,00 €</p>
        </div>
        `;
        shopContent.append(content) 
        
        let buy =document.createElement("button")
        buy.innerText="Añadir"
        buy.setAttribute("class","btn btn-primary addProduct")
        content.append(buy)

        buy.addEventListener("click", () =>{
            shoppingCard2.push({
                id: product._id,
                name: product.brand,
                price:product.price,
                img:product.img_url,
                available:product.available,
                v:product.__v,
            })
            console.log(shoppingCard2);
        })
})
    
})


    

