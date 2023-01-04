const selectorButtons = document.querySelectorAll('.btn');
const ShoppingCardItemsContainer = document.querySelector('.shoppingCard')
const buttonBag = document.querySelector('#buttonBag')
const firstShop = document.querySelector('.firstDivCart')
const tittleProduct = document.querySelector('.card-title')
const priceProduct = document.querySelector('.price')
const imgProduct = document.querySelector('.imgSec4')

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
            <div class="card-body " >
                <img class="imgSec4" src="${product.img_url}" class="card-img-top"
                    alt="Product green coffee">
                <h5 class="card-title">${product.brand}</h5>
                <p class="card-text"> <span class="price">${product.price}</span>,00 €</p>
                <a href="#" id="cafeCostaRica" class="btn btn-primary addProduct" disabled="${product.available}">Añadir</a>
            </div>
        </div>
        
            `
            if (product.available===false) {
                pictureBox.style.opacity='60%'
                pictureBox.style.cursor='not-allowed'
                pictureBox.style.pointerEvents='none'
            }
        });
    const selectorButtons = document.querySelectorAll('.btn');
const ShoppingCardItemsContainer = document.querySelector('.shoppingCard')
const buttonBag = document.querySelector('#buttonBag')
const firstShop = document.querySelector('.firstDivCart')
const tittleProduct = document.querySelector('.card-title')
const priceProduct = document.querySelector('.price')
const imgProduct = document.querySelector('.imgSec4')

selectorButtons.forEach((addToCardButton) => {
    addToCardButton.addEventListener('click', addToCardClicked)
    
});

    
        })
        
        updateShoppingCartTotal()
        

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
            ShoppingCardItemsContainer.appendChild(shoppingCardRow)
            updateShoppingCartTotal()
        
            shoppingCardRow
                .querySelector('.buttonDelete')
                .addEventListener('click', removeShoppingCartItem);
            updateShoppingCartTotal()
        
            shoppingCardRow.querySelector('.shoppingCartItemQuantity')
                .addEventListener('change', quantityChanged);
               
        }
        
        function updateShoppingCartTotal() {
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
        
        

          // <img class="card-img-top" src="${product.img_url}">
            // <h5 class="card-title">${product.brand}</h5>
            // <p class="card-text"> <span class="price">${product.brand}</span> €</p>
            // <a href="#" id="${product._id}" class="btn btn-primary addProduct">Añadir</a>

