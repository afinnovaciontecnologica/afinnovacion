/* =========================
   RESEÑAS
========================= */
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function addReview(){
let input = document.getElementById("reviewInput");
if(!input) return;

let text = input.value.trim();
if(text==="") return;

reviews.push(text);
localStorage.setItem("reviews", JSON.stringify(reviews));
displayReviews();
input.value="";
}

function displayReviews(){
let container = document.getElementById("reviews");
if(!container) return;

container.innerHTML="";
reviews.forEach(r=>{
container.innerHTML += "<p>⭐ "+r+"</p>";
});
}

displayReviews();


/* =========================
   CARRITO Y STOCK
========================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let products = {
"Laptop Gamer": {price:3200, stock:5},
"Impresora Epson": {price:650, stock:3},
"Audífonos Gamer": {price:119, stock:10}
};

function addToCart(name){
if(!products[name]) return;

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
let totalElement = document.getElementById("total");

if(!container || !totalElement) return;

container.innerHTML="";
let total = 0;

cart.forEach((item, index)=>{
container.innerHTML += `
<p>${item.name} - S/ ${item.price}
<button onclick="removeItem(${index})">❌</button></p>`;
total += item.price;
});

totalElement.innerText = total;
}

function removeItem(index){
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
location.reload();
}

function sendWhatsApp(){
if(cart.length === 0){
alert("Carrito vacío");
return;
}

let msg = "Hola AF Innovación Tecnológica,%0AQuiero:%0A";
cart.forEach(item=>{
msg += `- ${item.name} S/ ${item.price}%0A`;
});
window.open(`https://wa.me/51948231352?text=${msg}`);
}


/* =========================
   SLIDER (PROTEGIDO)
========================= */

const slides = document.querySelectorAll(".slide");

if(slides.length > 0){
let currentSlide = 0;

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
}


/* =========================
   CONTADOR (PROTEGIDO)
========================= */

let countdownElement = document.getElementById("countdown");

if(countdownElement){
let endDate = new Date();
endDate.setHours(endDate.getHours()+24);

setInterval(()=>{
let now = new Date();
let diff = endDate - now;

if(diff <= 0){
countdownElement.innerHTML = "Oferta finalizada";
return;
}

let hours = Math.floor(diff / (1000*60*60));
let minutes = Math.floor((diff % (1000*60*60))/(1000*60));
let seconds = Math.floor((diff % (1000*60))/1000);

countdownElement.innerHTML =
hours+"h "+minutes+"m "+seconds+"s";
},1000);
}
