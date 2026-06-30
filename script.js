// ================================
// Texture Demo v1
// Lightweight & Stable
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------
    // Navbar background on scroll
    // --------------------------

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(255,255,255,0.82)";
            navbar.style.backdropFilter = "blur(18px)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        } else {

            navbar.style.background = "rgba(255,255,255,.15)";
            navbar.style.backdropFilter = "blur(18px)";
            navbar.style.boxShadow = "none";

        }

    });

    // --------------------------
    // Fade in sections
    // --------------------------

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("reveal");

        observer.observe(section);

    });

    // --------------------------
    // Hero animation (GSAP only)
    // --------------------------

    if (window.gsap) {

        gsap.from(".hero-content > *", {

            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"

        });

    }

});
