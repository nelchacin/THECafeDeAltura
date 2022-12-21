// llamadas carrito 
const selectorButtons = document.querySelectorAll('.btn');
const ShoppingCardItemsContainer = document.querySelector('.shoppingCard')
const buttonBag = document.querySelector('#buttonBag')
const firstShop = document.querySelector('.firstDivCart')


//llamadas desplegable
const buttonQuestions = document.querySelectorAll(".linkQuestions")
const textQuestion = document.querySelectorAll(".pQuestion")
const arrowQuestion = document.querySelectorAll(".arrowQuestion")


selectorButtons.forEach((addToCardButton) => {
    addToCardButton.addEventListener('click', addToCardClicked)
});

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
    shoppingCardRow.classList.add("itemInTheCard")

    const shoppingCardContent = `
    <div class="row shoppingCartItem">
    <div class="col-6">
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
    ;
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
    let total = 0;
    const shoppingCartTotal = document.querySelector('.totalPrice')
    shoppingcartItems = document.querySelectorAll('.shoppingCartItem')

    shoppingcartItems.forEach(shoppingCartItem => {
        const shoppingCartItemElement = shoppingCartItem.querySelector('.shoppingCartItemPrice')
        const shoppingCartItemPrice = Number(shoppingCartItemElement.textContent.replace('€', ''))
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity')
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value)
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity
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


//desplegable
const chevronUp = document.querySelectorAll(".arrowQuestion")
buttonQuestions.forEach((buttonQuestion, key) => {
    buttonQuestion.addEventListener("click", () => {
        event.preventDefault()
        textQuestion[key].classList.toggle("open_close")
        rotate(chevronUp[key])
    })
})
const rotate = (img) => {
    if (img.style.transform === '') {
        img.style.transform = 'rotate(180deg)'
        img.style.transition = "all 0.4s"
    } else {
        img.style.transform = ''
    }
}

//validacion formulario
let form = document.querySelector('#theForm')
let nameInput = document.querySelector('#NameForm')
let emailInput = document.querySelector('#emailForm')
let movilInput = document.querySelector('#PhoneForm')
let textAreaInput = document.querySelector('#textArea1')
let checkBoxInput = document.querySelector('#checkBoxForm')
let button = document.querySelector('#enviarForm')




const formValidationName = (e) => {
    e.preventDefault()
    if (!nameInput.value) {
        alert('Introduce tu nombre')
        nameInput.focus()
        return
    }
    if (!emailInput.value.includes('@')) {
        alert('Introduce un correo con @')
        emailInput.focus()
        return
    }
    if (!(movilInput.value * 1)) {
        alert('Introduce un número de teléfono correcto')
        movilInput.focus()
        return
    }
    if (textAreaInput.value === "") {
        alert('¿En que podemos ayudarte?')
        textAreaInput.focus()
        return
    } if (!checkBoxInput.value.checked) {
        alert('¿Acepta las políticas de Privacidad y los terminso de condiciones?')
        return
    }
}

form.addEventListener('submit', formValidationName)



























