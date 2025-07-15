var getStarted = document.querySelector(".getStarted");
var serviceCont = document.querySelector(".serviceCont");
var cardCont = document.querySelector(".cardCont");
var cards = document.querySelectorAll(".card");
var orderInfo = document.querySelector(".orderInfo");
var rightArrowCont = document.querySelector(".rightArrowCont");
var leftArrowCont = document.querySelector(".leftArrowCont");
var cardsLoaded = false;

function showSelected() {
  
    var selected = document.querySelector(".selected");
    var currentScrollY = window.scrollY;

    if (selected) {
        selected.scrollIntoView({
            behavior: "auto",
            block: "nearest",
            inline: "center"
        });
    }

    window.scrollTo({ top: currentScrollY });
  
}

setInterval(function() {
  
    var firstCard = document.querySelector(".card:first-child");
    
    if (firstCard) {
      
        var lastCard = document.querySelector(".card:last-child");
        var gradientBorders = document.querySelectorAll(".gradientBorder");
        var margin = window.innerWidth / 2 - firstCard.clientWidth / 2;
        
        if (firstCard.style.marginLeft != margin + "px") {
            firstCard.style.marginLeft = margin + "px";
            showSelected();
        }

        if (lastCard.style.marginRight != margin + "px") {
            lastCard.style.marginRight = margin + "px";
            showSelected();
        }

        gradientBorders.forEach(gradientBorder => {
            if (!gradientBorder.parentElement.classList.contains("selected")) {
                if (gradientBorder.getAttribute("fill") == "url(#selectedGradient)") {
                    gradientBorder.setAttribute("fill", "white");
                }
            } else {
                if (gradientBorder.getAttribute("fill") != "url(#selectedGradient)") {
                    gradientBorder.setAttribute("fill", "url(#selectedGradient)");
                }
            }
        });
      
        if (firstCard.classList.contains("selected")) {
            leftArrowCont.style.display = "none";
        } else {
            leftArrowCont.style.display = "";
        }
      
        if (lastCard.classList.contains("selected")) {
            rightArrowCont.style.display = "none";
        } else {
            rightArrowCont.style.display = "";
        }
        
    }
  
}, 0);

window.resources.products.forEach(product => {

    var cardEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    cardEl.innerHTML = `
    <defs>
        <linearGradient id="selectedGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stop-color="#00B5E6" />
            <stop offset="100%" stop-color="#84E589" />
        </linearGradient>
    </defs>
    <rect class="gradientBorder" x="2" y="2" width="200" height="250" rx="6" ry="6" fill="white" stroke="black" stroke-width="1" />
    <rect x="6" y="6" width="192" height="242" rx="3" ry="3" fill="white" />
    <text class="amountTitle" x="100" y="63" font-size="35" font-weight="bold" text-anchor="middle"></text>
    <text class="unitTitle" x="100" y="93" font-size="20" font-weight="bold" text-anchor="middle"></text>
    <line x1="20" y1="125" x2="180" y2="125" stroke="black" stroke-width="1" />
    <text class="priceTitle" x="100" y="175" font-size="20" font-weight="bold" text-anchor="middle"></text>
    <text x="100" y="205" font-size="9" text-anchor="middle">Delivery: <tspan class="delivery" font-weight="bold"></tspan></text>
    `;

    var amountTitle = cardEl.querySelector(".amountTitle");
    var unitTitle = cardEl.querySelector(".unitTitle");
    var priceTitle = cardEl.querySelector(".priceTitle");
    var delivery = cardEl.querySelector(".delivery");
    var buyNow = document.querySelector(".buyNow");

    amountTitle.innerHTML = product.amountTitle;
    unitTitle.innerHTML = product.unitTitle;
    priceTitle.innerHTML = product.priceTitle;
    delivery.innerHTML = product.delivery;

    cardEl.setAttribute("height", "100%");
    cardEl.setAttribute("viewBox", "0 0 204 254");
    cardEl.classList.add("card");
    if (product.default) {
        cardEl.classList.add("selected");
        buyNow.href = product.url;
    }

    cardEl.addEventListener("click", function() {
        if (!cardEl.classList.contains("selected")) {
            if (document.querySelector(".selected")) {
                document.querySelector(".selected").classList.remove("selected");
            }
            cardEl.classList.add("selected");
            buyNow.href = product.url;
            
            showSelected()
        }
    });

    cardCont.appendChild(cardEl);

});

getStarted.addEventListener("click", function() {
    orderInfo.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
});

var cardClick = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
});

rightArrowCont.addEventListener("click", function() {
    var nextCard = document.querySelector(".selected").nextElementSibling;
    if (nextCard) {
        nextCard.dispatchEvent(cardClick);
    }
});

leftArrowCont.addEventListener("click", function() {
    var prevCard = document.querySelector(".selected").previousElementSibling;
    if (prevCard) {
        prevCard.dispatchEvent(cardClick);
    }
});