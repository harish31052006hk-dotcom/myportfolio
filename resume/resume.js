/*=========================================================
    RESUME.JS - Interactive Functionality & Animations
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================================
                        LOADER HIDE
    =========================================================*/
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 600);
    }

    /*=========================================================
                    STICKY NAVBAR
    =========================================================*/
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (!navbar) return;
        if (window.scrollY > 60) {
            navbar.style.padding = "12px 8%";
            navbar.style.background = "rgba(5, 8, 22, 0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.35)";
        } else {
            navbar.style.padding = "18px 8%";
            navbar.style.background = "rgba(7, 12, 27, 0.5)";
            navbar.style.boxShadow = "none";
        }
    });

    /*=========================================================
                    MOBILE MENU TOGGLE
    =========================================================*/
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = menuBtn.querySelector("i");
            if (icon) {
                if (navLinks.classList.contains("active")) {
                    icon.className = "fa-solid fa-xmark";
                } else {
                    icon.className = "fa-solid fa-bars";
                }
            }
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = menuBtn.querySelector("i");
                if (icon) icon.className = "fa-solid fa-bars";
            });
        });
    }

    /*=========================================================
                ACTIVE NAVIGATION & SCROLLSPY
    =========================================================*/
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === "#" + sectionId) {
                        item.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", scrollActive);

    /*=========================================================
                SCROLL REVEAL ANIMATION
    =========================================================*/
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once on page load

    /*=========================================================
                    SCROLL TO TOP BUTTON
    =========================================================*/
    const scrollBtn = document.getElementById("scrollTop");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                scrollBtn.classList.add("active");
            } else {
                scrollBtn.classList.remove("active");
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /*=========================================================
                GLASS CARD MOUSE SPOTLIGHT EFFECT
    =========================================================*/
    const cards = document.querySelectorAll(".glass-card");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
});

/*=========================================================
            COPY CONTACT INFO HELPER
=========================================================*/
function copyContactInfo(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = buttonElement.innerHTML;
        buttonElement.innerHTML = `<i class="fa-solid fa-check" style="color:#4ade80;"></i> Copied!`;
        buttonElement.style.color = "#4ade80";

        setTimeout(() => {
            buttonElement.innerHTML = originalHTML;
            buttonElement.style.color = "";
        }, 2000);
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}
