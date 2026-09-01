const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        subject === "" ||
        message === ""
    ) {
        formMessage.textContent =
            "Please fill in all fields.";
        formMessage.style.color = "#e50914";
        return;
    }

    formMessage.textContent =
        "Thank you! Your message has been submitted.";
    formMessage.style.color = "#4caf50";
    contactForm.reset();
});