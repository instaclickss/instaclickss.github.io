var menu = document.querySelector(".menu");
var menuButton = document.querySelector(".menuButton");
var menuClose = document.querySelector(".menuClose");
var menuCover = document.querySelector(".menuCover");
var navBarLinks = document.querySelectorAll(".navBarLinks > li > a");
var menuLinks = document.querySelectorAll(".menuLinks > li > a");
var footerLinks = document.querySelectorAll(".footerLinks > li > a");
var trackingServer = "https://e17f57e0edc1.ngrok-free.app";
var events = [];

for (var navBarLinkI = 0; navBarLinkI < navBarLinks.length; navBarLinkI++) {
    var navBarLink = navBarLinks[navBarLinkI];
    if (navBarLink.href == location.href) {
        navBarLink.classList.add("active");
    }
}

for (var menuLinkI = 0; menuLinkI < menuLinks.length; menuLinkI++) {
    var menuLink = menuLinks[menuLinkI];
    if (menuLink.href == location.href) {
        menuLink.classList.add("active");
    }
}

for (var footerLinkI = 0; footerLinkI < footerLinks.length; footerLinkI++) {
    var footerLink = footerLinks[footerLinkI];
    if (footerLink.href == location.href) {
        footerLink.classList.add("active");
    }
}

menuButton.addEventListener("click", function() {
    menu.style.animationName = "menuOpen";
    menuCover.style.display = "unset";
});

menuClose.addEventListener("click", function() {
    menu.style.animationName = "menuClose";
    menuCover.style.display = "none";
});

menuCover.addEventListener("click", function() {
    menu.style.animationName = "menuClose";
    this.style.display = "none";
});

function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
}

function getCookie(name) {
    var cookies = document.cookie.split(";");
    for (var cookieI = 0; cookieI < cookies.length; cookieI++) {
        var cookie = cookies[cookieI].replace(" ", "").replace(";", "").split("=");
        if (cookie[0] == name) {
            return cookie[1];
        }
    }
}

async function getUser() {

    var userCookie = getCookie("user");

    if (userCookie) {
        user = JSON.parse(decodeURIComponent(userCookie));
        return user;
    }

    var user = {};

    user.navigatorObj = {
        vendor: navigator.vendor,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: JSON.stringify(navigator.languages),
        hardwareConcurrency: navigator.hardwareConcurrency,
        deviceMemory: navigator.deviceMemory,
        cookieEnabled: navigator.cookieEnabled,
    };

    var ipRes = await fetch("https://api.ipify.org/?format=json");
    var ipData = await ipRes.json();
    user.ip = ipData.ip;

    user.resolution = {
        width: window.screen.width,
        height: window.screen.height
    };

    return user;
    
}

/*rrweb.record({
    emit(event) {
        events.push(event);
    }
});*/