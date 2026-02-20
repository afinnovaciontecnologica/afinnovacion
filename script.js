let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
alert("Producto agregado al carrito");
}

function loadCart(){
let container = document.getElementById("cartItems");
let total = 0;

cart.forEach((item, index)=>{
container.innerHTML += `
<p>${item.name} - S/ ${item.price} 
<button onclick="removeItem(${index})">❌</button></p>`;
total += item.price;
});

document.getElementById("total").innerText = total;
}

function removeItem(index){
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
location.reload();
}

function sendWhatsApp(){
let msg = "Hola AF Innovación Tecnológica,%0AQuiero:%0A";
cart.forEach(item=>{
msg += `- ${item.name} S/ ${item.price}%0A`;
});
window.open(`https://wa.me/51948231352?text=${msg}`);
}
