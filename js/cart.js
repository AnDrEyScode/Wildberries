const cart = () => {
  const cartBtn = document.querySelector(".button-cart")
const cart = document.getElementById("modal-cart")
const cartCross = cart.querySelector(".modal-close")

console.log(cart)


console.dir(cartBtn)

cartBtn.addEventListener('click', function(){
  cart.style.display = 'flex'
})

cartCross.addEventListener('click', function(){
  cart.style.display = ''
})
}

cart()