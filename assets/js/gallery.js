const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Remove active class
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class
        this.classList.add("active");
        const filter = this.getAttribute("data-filter");
        galleryItems.forEach(function(item) {
            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});