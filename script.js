document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Cek apakah pengguna sebelumnya memilih dark mode
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Animasi saat scroll ke produk
    const products = document.querySelectorAll(".product");
    
    const scrollAnimation = () => {
        let triggerBottom = window.innerHeight * 0.9;
        
        products.forEach(product => {
            let boxTop = product.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                product.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation();
});

document.addEventListener("DOMContentLoaded", function () {
    // Mode Gelap & Terang
    const toggleTheme = document.getElementById("toggle-theme");
    const body = document.body;

    // Cek mode yang disimpan di localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    toggleTheme.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Simpan preferensi pengguna
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Animasi Scroll
    const elements = document.querySelectorAll(".animate-on-scroll");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        elements.forEach((el) => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Panggil sekali agar elemen yang sudah terlihat langsung muncul
});
