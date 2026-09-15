const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach((card) => {
            const categories = card.dataset.category.split(" ");

            if (filter === "all" || categories.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-button");
const formStatus = document.querySelector("#form-status");

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formStatus.textContent = "";
        formStatus.className = "form-status";

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                formStatus.textContent =
                    "Message sent successfully. Thank you for reaching out.";

                formStatus.classList.add("success");

                contactForm.reset();
            } else {
                formStatus.textContent =
                    "Your message could not be sent. Please try again.";

                formStatus.classList.add("error");
            }
        } catch (error) {
            formStatus.textContent =
                "There was a connection problem. Please try again.";

            formStatus.classList.add("error");

            console.error("Contact form error:", error);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
        }
    });
}
