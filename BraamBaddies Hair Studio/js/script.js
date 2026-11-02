function showMessage() {
    alert("Thank you for contacting BraamBaddies Hair Studio! We will get back to you soon.");
}
document.addEventListener("DOMContentLoaded", function () {

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute("aria-expanded") === "true";

            question.setAttribute("aria-expanded", !isExpanded);
            answer.hidden = isExpanded;

        });

    });

});
// WEDE Part 3: Interactive hair gallery
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("close-lightbox");

    if (!lightbox || !lightboxImage || !closeButton) {
        return;
    }

    function openLightbox(image) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;
        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImage.src = "";
    }

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            openLightbox(image);
        });

        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !lightbox.hidden) {
            closeLightbox();
        }
    });
});
// WEDE Part 3: Search hair services
function searchServices() {
    const input = document.getElementById("serviceSearch");
    const message = document.getElementById("searchMessage");

    if (!input || !message) return;

    const searchText = input.value.toLowerCase().trim();
    const services = document.querySelectorAll(".service-item");

    let visibleCount = 0;

    services.forEach(function (service) {
        const serviceText = service.textContent.toLowerCase();
        const matches = serviceText.includes(searchText);

        service.style.display = matches ? "" : "none";

        if (matches) {
            visibleCount++;
        }
    });

    if (searchText === "") {
        message.textContent = "";
    } else if (visibleCount === 0) {
        message.textContent = "No matching services found. Try another search.";
    } else {
        message.textContent = visibleCount + " matching service(s) found.";
    }
}