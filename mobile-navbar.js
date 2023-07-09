class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeclass = "active";

        this.handleclick = this.handleclick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }

    handleclick() {
        this.navList.classList.toggle(this.activeclass);
        this.mobileMenu.classList.toggle(this.activelass)
        this.animateLinks();
    }

    addclickEvent() {
        this.mobileMenu.addEventListener("click", this.handleclick);
    }

    init() {
        if (this.mobileMenu) {
            this.addclickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();