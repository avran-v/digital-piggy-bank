//resetting local storage values 
//localStorage.removeItem("goalName");
//localStorage.removeItem("progress");
//localStorage.removeItem("goalValue");


var priceContainer = document.querySelector("span.a-offscreen"); 
const rawPrice = new String(priceContainer.textContent); 
let price = parseFloat(rawPrice.substring(1)); 

//container 1
const piggyBankSetup = document.createElement("div"); 
const setupMessage = document.createElement("h1"); 
//add if statement to make sure this only shows if first time
setupMessage.textContent = "Digital Piggy Bank is at work!"; 
piggyBankSetup.append(setupMessage); 
piggyBankSetup.setAttribute('id', 'piggyBankTitle'); 

//container 2
const piggyBankContainer = document.createElement("div"); 
const test = document.createElement("h3"); 
piggyBankContainer.append(test); 
piggyBankContainer.setAttribute('id', 'piggyBankContainer'); 

//progress bar setup 
const myProgress = document.createElement("div"); 
myProgress.setAttribute('id', 'myProgress'); 
const fullBar = document.createElement("div"); 
fullBar.setAttribute('id', 'fullBar'); 
fullBar.append(myProgress); 

//extra message
const congratsMessage = document.createElement("h1"); 

//piggyBankContainer.append(fullBar); 
if(localStorage.goalName == null){
    test.textContent = "Why don't you save this money for a goal?"; 
} else {
    test.textContent = "Why don't you save this money for your " + localStorage.goalName + " goal?";
}
const navbar = document.getElementById("navbar-main");
navbar.insertAdjacentElement("afterend", piggyBankSetup); 
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
    msg.append(msgHighlight);

    const savedConfirmation = document.createElement("div"); 
    savedConfirmation.append(msg);
    savedConfirmation.append(fullBar); 
    savedConfirmation.append(congratsMessage); 
    savedConfirmation.setAttribute('id', 'savedConfirmation');

    pageCover.append(savedConfirmation);  

    if(localStorage["progress"] > 0){
        var currentProgress = parseFloat(localStorage.progress) + price; 
        localStorage.progress = currentProgress; 
    } else {
        localStorage.progress = price;
    }
    
    if(currentProgress > parseFloat(localStorage.goalValue)){
        msgHighlight.textContent = "You reached your " + localStorage.goalName + " goal of $" + localStorage.goalValue + "!"; 
        localStorage.progress = currentProgress - parseFloat(localStorage.goalValue); 
        localStorage.removeItem("goalName");
        fillProgress(100); 
        congratsMessage.textContent = "We saved the extra $" + parseFloat(localStorage.progress).toFixed(2) + " towards your next goal. Set it the next time you shop!"; 
    } else {
        var totalSaved = parseFloat(localStorage.progress); 
        var percentProgress = (totalSaved/parseFloat(localStorage.goalValue)) * 100;   
        msgHighlight.textContent = "You've saved $" + totalSaved.toFixed(2) + " towards your " + localStorage.goalName + " goal of $" + localStorage.goalValue + " aka " + percentProgress.toFixed(2) +"%!"; 
        fillProgress(percentProgress); 
        congratsMessage.textContent = "You're almost there! Keep staying mindful of your spending to reach your goal soon!"
    }
}

var i = 0; 
function fillProgress(totalSaved) {
    if (i == 0){
        i = 1; 
        var width = 1; 
        var id = setInterval(frame, 10); 
        function frame() {
            if (width >= totalSaved){
                clearInterval(id); 
            } else {
                width++; 
                myProgress.style.width = width + "%"; 
            }
        }
    }
}

function firstTimeChecker(){
    if(localStorage.goalName == null){
        localStorage.goalName = prompt("What do you want to save money towards?"); 
        localStorage.goalValue = prompt("What is the total amount for the goal? Number only, no symbols.");
    }
    disableBuying(); 
}

const saveButton = document.createElement("button"); 
saveButton.textContent = "Let's save!"; 
piggyBankContainer.append(saveButton); 
saveButton.addEventListener("click", firstTimeChecker);
saveButton.setAttribute('id', 'saveButton'); 
