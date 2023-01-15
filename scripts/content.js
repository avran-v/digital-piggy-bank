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

function disableBuying(){
    const rightCol = document.getElementById("rightCol");  
    rightCol.style.display = "none"; 
    const body = document.querySelector("html"); 
    const pageCover = document.createElement("div"); 
    pageCover.setAttribute('id', 'pageCover'); 
    body.append(pageCover); 
    const msg = document.createElement("h1"); 
    const msgHighlight = document.createElement("span");
    msgHighlight.setAttribute('id', 'msgHighlight'); 
    msgHighlight.textContent = "You've saved [this much] towards your goal, aka ??%!"; 
    msg.append(msgHighlight);
    pageCover.append(msg);  

    if(localStorage["progress"] > 0){
        var currentProgress = parseFloat(localStorage.progress) + price; 
        localStorage.progress = currentProgress; 
    } else {
        localStorage.progress = price;
    }
    var totalSaved = localStorage.progress; 
    var percentProgress = (totalSaved/100) * 100;  
    msgHighlight.textContent = "You've saved " + totalSaved + " towards your goal of $100, aka " + percentProgress +"%"; 
}

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
    setTimeout(disableBuying, 3000); 
}
//add updateDisplays function that shows your goal 
//and how far percentage wise you are to it
//id="deskptop_buybox" should also have css class added to it
//blocking all things 

const saveButton = document.createElement("button"); 
saveButton.textContent = "Let's save!"; 
piggyBankContainer.append(saveButton); 
saveButton.addEventListener("click", fillProgress);
