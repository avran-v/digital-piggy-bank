//const price = document.querySelector("attach-base-product-price");
//console.log(price); 
//console.log("testing"); 
//if (price) {
    //const test = document.createElement("p"); 
    //test.textContent = `does this even work?`; 
    //price.insertAdjacentElement("afterend", test); 
//}

var priceContainer = document.querySelector("span.a-offscreen"); 
const price = new String(priceContainer.textContent); 
const test = document.createElement("h1"); 
test.textContent = "Super long so I can see where exactly this ends up." + price; 
//const productDescription = document.getElementById('ppd'); 
//productDescription.insertAdjacentElement("afterend", test); 
//alert(price); 
const navbar = document.getElementById("navbar-main");
navbar.insertAdjacentElement("afterend", test); 
const belowPrice = document.querySelector("div.a-section.a-spacing-none.aok-align-center");
belowPrice.insertAdjacentElement("afterend", test); 