const target = document.querySelectorAll("[data-anime]");

const ativarScroll = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.96);

    target.forEach(e => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    })
}
window.addEventListener("scroll", _.debounce(ativarScroll, 80));

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.handleClick = this.handleClick.bind(this);
        this.activeClass = "active";
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        this.navLinks.forEach(link => {
            link.addEventListener("click", this.handleClick);
        })
    }
}
const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-item",);
mobileNavbar.addClickEvent();