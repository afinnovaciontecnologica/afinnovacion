let cart = JSON.parse(localStorage.getItem("cart")) || [];

let products = {
"Laptop Gamer": {price:3200, stock:5},
"Impresora Epson": {price:650, stock:3},
"Audífonos Gamer": {price:119, stock:10}
};

function addToCart(name){
if(products[name].stock > 0){
cart.push({name:name, price:products[name].price});
products[name].stock--;
localStorage.setItem("cart", JSON.stringify(cart));
alert("Producto agregado. Stock restante: "+products[name].stock);
}else{
alert("Producto agotado");
}
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
/* SLIDER */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index){
slides.forEach(slide => slide.classList.remove("active"));
slides[index].classList.add("active");
}

function changeSlide(direction){
currentSlide += direction;
if(currentSlide >= slides.length) currentSlide = 0;
if(currentSlide < 0) currentSlide = slides.length - 1;
showSlide(currentSlide);
}

setInterval(()=>{
changeSlide(1);
},4000);


/* CONTADOR */
let endDate = new Date();
endDate.setHours(endDate.getHours()+24);

setInterval(()=>{
let now = new Date();
let diff = endDate - now;

let hours = Math.floor(diff / (1000*60*60));
let minutes = Math.floor((diff % (1000*60*60))/(1000*60));
let seconds = Math.floor((diff % (1000*60))/1000);

document.getElementById("countdown").innerHTML =
hours+"h "+minutes+"m "+seconds+"s";
},1000);
