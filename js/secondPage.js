console.log("hola");
axios
.get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {
        const picturesCoffee =response.data.products
        picturesCoffee.forEach(product => {
            const pictureBox = document.createElement('div')
            pictureBox.setAttribute("class","card-body")
            document.querySelector('main').appendChild(pictureBox)
            pictureBox.innerHTML=`
            <img class="card-img-top" src="${product.img_url}">
            <h5 class="card-title">${product.brand}</h5>
            <p class="card-text"> <span class="price">${product.price}</span> €</p>
            <a href="#" id="${product._id}" class="btn btn-primary addProduct">Añadir</a>
            `
            
        });
console.log(response.data.products);
    
        })

