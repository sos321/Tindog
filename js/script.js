"strict";

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const regularNavLinks = document.querySelectorAll(".nav-main li a");
const mobileNavLinks = document.querySelectorAll(".mobile-nav li a");

mobileNavBtn.addEventListener("click", toggleMobileNav);

function toggleMobileNav() {
    const mobileNav = document.querySelector(".mobile-nav-holder");
    mobileNav.classList.toggle("active");
    document.querySelector("html").classList.toggle("stop-overflow");

    if (mobileNav.classList.contains("active")) {
        document.querySelector(
            '.mobile-nav-btn ion-icon[name="menu-outline"]'
        ).style.display = "none";

        document.querySelector(
            '.mobile-nav-btn ion-icon[name="close-outline"]'
        ).style.display = "block";
    } else {
        document.querySelector(
            '.mobile-nav-btn ion-icon[name="menu-outline"]'
        ).style.display = "block";

        document.querySelector(
            '.mobile-nav-btn ion-icon[name="close-outline"]'
        ).style.display = "none";
    }
}

function initLinks(links, isMobile) {
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            if (isMobile) toggleMobileNav();

            const href = link.getAttribute("href");

            // Back to top
            if (href === "#")
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });

            // Other links
            if (href !== "#" && href.startsWith("#")) {
                const sectionEl = document.querySelector(href);
                sectionEl.scrollIntoView({ behavior: "smooth" });
            }

            if (
                link.classList.contains("main-nav-link") &&
                screen.width <= 834
            ) {
                headerEl.classList.toggle("nav-open");
                document
                    .querySelector("html")
                    .classList.toggle("stop-overflow");
            }

            // Removing focus from links when clicked
            link.blur();
        });
    });
}

initLinks(regularNavLinks, false);
initLinks(mobileNavLinks, true);
