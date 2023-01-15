var priceContainer = document.querySelector("span.a-offscreen"); 
const rawPrice = new String(priceContainer.textContent); 
let price = parseFloat(rawPrice.substring(1)); 

const piggyBankContainer = document.createElement("div"); 
const test = document.createElement("h3"); 
piggyBankContainer.append(test); 

const myProgress = document.createElement("div"); 
myProgress.setAttribute('id', 'myProgress'); 
const fullBar = document.createElement("div"); 
fullBar.setAttribute('id', 'fullBar'); 
fullBar.append(myProgress); 

piggyBankContainer.append(fullBar); 
test.textContent = "Why don't you save this money for your goal?"; 
//const navbar = document.getElementById("navbar-main");
//navbar.insertAdjacentElement("afterend", test); 
const belowPrice = document.querySelector("div.a-section.a-spacing-none.aok-align-center");
belowPrice.insertAdjacentElement("afterend", piggyBankContainer); 

var i = 0; 
function fillProgress() {
    if (i == 0){
        i = 1; 
        var width = 1; 
        var id = setInterval(frame, 10); 
        function frame() {
            if (width >= price){
                clearInterval(id); 
            } else {
                width++; 
                myProgress.style.width = width + "%"; 
            }
        }
    }
}

const saveButton = document.createElement("button"); 
saveButton.textContent = "Let's save!"; 
piggyBankContainer.append(saveButton); 
saveButton.addEventListener("click", fillProgress);
