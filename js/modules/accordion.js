const accordion = () => {
    const detailsLink = document.querySelector(".about__details-link");
    const detailsText = document.querySelector(".about__details-text");

    detailsLink.addEventListener("click", function(e) {
        e.preventDefault();
        detailsText.classList.toggle("visible");

        if (detailsLink.textContent === "Подробнее о компании") {
            detailsLink.textContent = "Меньше о компании";
        } else {
            detailsLink.textContent = "Подробнее о компании";
        }
    });

    // Scroll

    document.getElementById("scrollButton").addEventListener("click", function() {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });
};

export default accordion;