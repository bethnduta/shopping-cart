//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};
// cart working js
if (document.readyState== "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

// making function
function ready(){
    // remove items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i=0; i< removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

// Quantity changes
var quantityInputs = document.getElementsByClassName('cart-quantity');
for (var i=0; i<quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change",quantityChanged);
}
}
//Add to cart
var addCart = document.getElementsByClassName('add-cart')
for (var i=0; i<addCart.length;i++){
    var button = addCart[i];
    button.addEventListener("click",addCartCLicked);
}

// Remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Add to cart
function addCartCLicked(event){
    var button =event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    updatetotal()
}

// quantity changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();

}

// update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i<cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + price * quantity;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}