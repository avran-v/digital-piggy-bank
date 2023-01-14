var priceContainer = document.querySelector("span.a-offscreen"); 
const price = new String(priceContainer.textContent); 
const test = document.createElement("h1"); 
test.textContent = "Super long so I can see where exactly this ends up." + price; 
const navbar = document.getElementById("navbar-main");
navbar.insertAdjacentElement("afterend", test); 
const belowPrice = document.querySelector("div.a-section.a-spacing-none.aok-align-center");
belowPrice.insertAdjacentElement("afterend", test); 