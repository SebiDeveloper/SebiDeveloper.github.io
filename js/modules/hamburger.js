const hamburger = () => {
    const hamburgerElem = document.querySelector(".hamburger"),
          menu = document.querySelector(".menu"),
          close = document.querySelector(".menu__close"),
          menuLinks = document.querySelectorAll(".menu__link a");

    function showMenu() {
        menu.classList.add("active");
    }

    function hideMenu() {
        menu.classList.remove("active");
    }

    hamburgerElem.addEventListener("click", () => {
        showMenu();
    });

    close.addEventListener("click", () => {
        hideMenu();
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetBlock = document.getElementById(targetId);

            if(targetBlock) {
                hideMenu();

                window.scrollTo({
                    top:targetBlock.offsetTop,
                    behavior: "smooth"
                });
            };
        });
    });
};

export default hamburger;