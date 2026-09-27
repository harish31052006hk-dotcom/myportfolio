/*=============================================================
    PROTOSEM WEEKLY REPORT SCRIPT (report.js)
    Handles scroll-to-top button and reveal animations
==============================================================*/

document.addEventListener("DOMContentLoaded", () => {
    // Scroll to Top Button functionality
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollBtn.style.display = "flex";
            } else {
                scrollBtn.style.display = "none";
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Scroll reveal animation for report cards
    const cards = document.querySelectorAll(".report-card");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(card);
    });

    // Copy Code Button functionality
    document.querySelectorAll(".copy-code-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const container = btn.closest(".code-container");
            const codeBlock = container ? container.querySelector("code") : null;
            if (codeBlock) {
                const codeText = codeBlock.innerText;
                navigator.clipboard.writeText(codeText).then(() => {
                    const originalContent = btn.innerHTML;
                    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                    btn.style.background = '#10b981';
                    btn.style.color = '#ffffff';
                    setTimeout(() => {
                        btn.innerHTML = originalContent;
                        btn.style.background = '';
                        btn.style.color = '';
                    }, 2000);
                }).catch(err => {
                    console.error("Failed to copy code: ", err);
                });
            }
        });
    });
});
