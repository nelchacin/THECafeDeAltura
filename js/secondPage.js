
axios
.get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {
        const picturesCoffee =response.data.products
        picturesCoffee.forEach(product => {
            const pictureBox = document.createElement('div')
            pictureBox.setAttribute("class","card-body")
            document.querySelector('main').appendChild(pictureBox)
            pictureBox.innerHTML=`
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <img class="imgSec4" src="${product.img_url}" class="card-img-top"
                    alt="Product green coffee">
                <h5 class="card-title">${product.brand}</h5>
                <p class="card-text"> <span class="price">${product.price}</span>,00 €</p>
                <a href="#" id="cafeCostaRica" class="btn btn-primary addProduct">Añadir</a>
            </div>
        </div>
        
            `
            
        });
console.log(response.data.products);
    
        })

        


          // <img class="card-img-top" src="${product.img_url}">
            // <h5 class="card-title">${product.brand}</h5>
            // <p class="card-text"> <span class="price">${product.brand}</span> €</p>
            // <a href="#" id="${product._id}" class="btn btn-primary addProduct">Añadir</a>

