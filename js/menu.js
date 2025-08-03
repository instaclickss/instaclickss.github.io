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