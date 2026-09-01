// header
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
        const menuBtn = document.getElementById("menuBtn");
        const navbar = document.getElementById("navbar");

        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("show");
            if (navbar.classList.contains("show")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }
        });

        const links = navbar.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", function () {
                navbar.classList.remove("show");
                menuBtn.innerHTML = "☰";
            });
        });
    })
    .catch(error => {
        console.error("Header loading error:", error);
    });

    // footer
    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
        console.error("Footer loading error:", error);
    });