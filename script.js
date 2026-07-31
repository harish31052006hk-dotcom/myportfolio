/*
==========================================================
            PORTFOLIO SCRIPT.JS
            Premium Portfolio
            Features
            -----------------------
            ✔ Loader
            ✔ Sticky Navbar
            ✔ Mobile Menu
            ✔ Active Navigation
            ✔ Smooth Scroll
            ✔ Scroll To Top
            ✔ Reveal Animation
            ✔ Hero Typing Animation
            ✔ Hover Effects
==========================================================
*/


/*=========================================================
                    LOADER
=========================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1000);

});


/*=========================================================
                STICKY NAVBAR
=========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.padding = "14px 10%";

        navbar.style.background = "rgba(5,8,22,.95)";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }

    else {

        navbar.style.padding = "18px 10%";

        navbar.style.background = "rgba(7,12,27,.45)";

        navbar.style.boxShadow = "none";

    }

});


/*=========================================================
                MOBILE MENU
=========================================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/*=========================================================
        CLOSE MENU AFTER CLICKING A LINK
=========================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*=========================================================
                ACTIVE NAVIGATION
=========================================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================================
                SCROLL TO TOP
=========================================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "flex";

    }

    else {

        scrollBtn.style.display = "none";

    }

});


scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================================
                FADE-IN REVEAL
=========================================================*/

const revealElements = document.querySelectorAll(

    ".about-card, .timeline-item, .skill-card, .week-card"

);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {

        threshold: .15

    }

);


revealElements.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".7s";

    revealObserver.observe(item);

});


/*=========================================================
            HERO TYPING EFFECT
=========================================================*/

/*
Replace these with your own roles later.
*/

const roles = [
    
    "AWS Enthusiast",

    "Cloud Engineer",

    "AWS Enthusiast",

    "Cloud Engineer",

];

const typingText = document.querySelector(".hero-left h3");

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = currentRole.substring(

            0,

            charIndex++

        );

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typingText.textContent = currentRole.substring(

            0,

            charIndex--

        );

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();


/*=========================================================
            PARALLAX HERO IMAGE
=========================================================*/

window.addEventListener("mousemove", (e) => {

    const card = document.querySelector(".profile-card");

    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    card.style.transform =

        `rotateY(${x}deg) rotateX(${-y}deg)`;

});


window.addEventListener("mouseleave", () => {

    document.querySelector(".profile-card").style.transform =

        "rotateY(0deg) rotateX(0deg)";

});


/*=========================================================
            BUTTON RIPPLE EFFECT
=========================================================*/

const buttons = document.querySelectorAll(

    ".btn-primary, .btn-secondary"

);

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        circle.style.width =

            circle.style.height = diameter + "px";

        circle.style.left =

            e.clientX -

            this.getBoundingClientRect().left -

            diameter / 2 + "px";

        circle.style.top =

            e.clientY -

            this.getBoundingClientRect().top -

            diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/*=========================================================
        SKILL CARD HOVER SCALE
=========================================================*/

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


/*=========================================================
        WEEK CARD CLICK EFFECT
=========================================================*/

const weeks = document.querySelectorAll(".week-card");

weeks.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(.95)";

        setTimeout(() => {

            card.style.transform = "scale(1)";

        }, 150);

    });

});


/*=========================================================
            IMAGE HOVER TILT
=========================================================*/

const profile = document.querySelector(".profile-card");

profile.addEventListener("mouseenter", () => {

    profile.style.transition = ".3s";

});

profile.addEventListener("mouseleave", () => {

    profile.style.transform = "rotateX(0deg) rotateY(0deg)";

});


/*=========================================================
        CONSOLE MESSAGE
=========================================================*/

console.log(

"============================================"

);

console.log(

" Premium Portfolio Loaded Successfully "

);

console.log(

" Developed by Harish Kumaran "

);

console.log(

"============================================"

);
function openWeek0(){

document.getElementById("week0Modal").style.display="block";

document.body.style.overflow="hidden";

}

function closeWeek0(){

document.getElementById("week0Modal").style.display="none";

document.body.style.overflow="auto";

}

window.addEventListener("click",function(e){

let modal=document.getElementById("week0Modal");

if(e.target===modal){

closeWeek0();

}

});

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

closeWeek0();

}

});


/*=========================================================
                END OF SCRIPT.JS
=========================================================*/
