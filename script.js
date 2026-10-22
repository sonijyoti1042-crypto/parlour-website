document.addEventListener("DOMContentLoaded", function () {

/* MOBILE NAVBAR */

const navLinks = document.querySelectorAll("#mainNav .nav-link");
const navbar = document.querySelector("#mainNav");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (window.innerWidth < 992) {
            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(navbar);

            if (bootstrapCollapse) {
                bootstrapCollapse.hide();
            }
        }
    });
});

/* APPOINTMENT FORM */

const appointmentForm =
    document.querySelector("#appointmentForm");

const nameInput =
    document.querySelector("#name");

const emailInput =
    document.querySelector("#email");

const formMessage =
    document.querySelector("#formMessage");

appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();


    if (name === "" || email === "") {
        formMessage.textContent =
            "Please enter your name and email.";
        formMessage.style.color = "#dc3545";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent =
            "Please enter a valid email address.";
        formMessage.style.color = "#dc3545";
        return;
    }

    formMessage.textContent =
        "Thank you! We will contact you soon.";
    formMessage.style.color = "#e77785";
    appointmentForm.reset();
});
});
