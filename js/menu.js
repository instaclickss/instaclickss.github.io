var menu = document.querySelector(".menu");
var menuButton = document.querySelector(".menuButton");
var menuClose = document.querySelector(".menuClose");
var menuCover = document.querySelector(".menuCover");
var navBarLinks = document.querySelectorAll(".navBarLinks > li > a");
var menuLinks = document.querySelectorAll(".menuLinks > li > a");
var footerLinks = document.querySelectorAll(".footerLinks > li > a");

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

var trackingServer = "https://instaclicksadmin.glitch.me";

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

    var res = {}

    res.navigatorObj = {};
    var navigatorKeys = [
        ...Object.keys(navigator), 
        ...Object.getOwnPropertyNames(Object.getPrototypeOf(navigator))
    ];
    navigatorKeys.forEach(key => {
        try {
            var value = navigator[key];
            if (typeof value !== "function") {
                res.navigatorObj[key] = value;
            }
        } catch {
            return;
        }
    });

    var ipRes = await fetch("https://api.ipify.org/?format=json");
    var ipData = await ipRes.json();
    res.ip = ipData.ip;

    res.resolution = {
        page: {
            width: window.innerWidth,
            height: window.innerHeight
        },
        screen: {
            width: window.screen.width,
            height: window.screen.height
        }
    };

    return res;
    
}

async function startTracking() {

    var userCookie = getCookie("user");
    var url = location.href;
    var user;

    if (userCookie) {
        user = JSON.parse(decodeURIComponent(userCookie));
    } else {
        user = await getUser();
        setCookie("user", encodeURIComponent(JSON.stringify(user)));
    }

    await fetch(`${trackingServer}/sendAnalytics`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: user,
            activity: "joined " + url
        })
    });

    window.addEventListener("beforeunload", function() {
        var data = JSON.stringify({
            user: user,
            activity: "left " + url
        });
        var blob = new Blob([data], { type: "application/json" });
        navigator.sendBeacon(`${trackingServer}/sendAnalytics`, blob);
    });

}

startTracking();