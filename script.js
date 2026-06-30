// ===============================
// Texture Signature Salon v2
// Lightweight interactions
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------
    // Navbar
    // -----------------------

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.style.background = "rgba(255,255,255,.82)";
            navbar.style.boxShadow = "0 15px 45px rgba(0,0,0,.08)";
            navbar.style.backdropFilter = "blur(24px)";

        } else {

            navbar.style.background = "rgba(255,255,255,.18)";
            navbar.style.boxShadow = "none";
            navbar.style.backdropFilter = "blur(20px)";

        }

    });

    // -----------------------
    // Scroll Reveal
    // -----------------------

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("reveal");
        observer.observe(section);

    });

    // -----------------------
    // GSAP Hero Animation
    // -----------------------

    if (window.gsap) {

        gsap.from(".navbar", {
            y: -60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out"
        });

        gsap.from(".hero-content > *", {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
        });

        gsap.from(".hero-image img", {
            scale: 1.1,
            duration: 2.2,
            ease: "power2.out"
        });

    }

    // -----------------------
    // Hero Metrics Animation
    // -----------------------

    const metrics = document.querySelectorAll(".hero-metrics h3");

    function animateInteger(el, target, suffix) {

        let current = 0;
        const step = target / 60;

        function update() {

            current += step;

            if (current >= target) {

                el.textContent = target + suffix;
                return;

            }

            el.textContent = Math.floor(current) + suffix;

            requestAnimationFrame(update);

        }

        update();

    }

    const metricObserver = new IntersectionObserver((entries) => {

        if (!entries[0].isIntersecting) return;

        metrics.forEach(metric => {

            const txt = metric.textContent;

            if (txt.includes("736")) {

                animateInteger(metric, 736, "+");

            }

            else if (txt.includes("4.6")) {

                let value = 0;

                const interval = setInterval(() => {

                    value += 0.1;

                    metric.textContent = value.toFixed(1) + "★";

                    if (value >= 4.6) {

                        metric.textContent = "4.6★";
                        clearInterval(interval);

                    }

                }, 35);

            }

            else if (txt.includes("4+")) {

                animateInteger(metric, 4, "+");

            }

        });

        metricObserver.disconnect();

    });

    const heroMetrics = document.querySelector(".hero-metrics");

    if (heroMetrics) {

        metricObserver.observe(heroMetrics);

    }

});
