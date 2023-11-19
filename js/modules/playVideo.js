const playVideo = () => {
    const btn = document.querySelector(".video__block-circle"),
          hidden = document.querySelector(".hidden"),
          close = document.querySelector(".hidden__close"),
          background = document.querySelector(".video__wrapper"),
          hamburgerElem = document.querySelector(".hamburger");

    // Проверка при загрузке страницы
    window.onload = function () {
        checkWindowSize();
    };

    // Проверка при изменении размера окна
    window.onresize = function () {
        checkWindowSize();
    };

    // Проверка размера окна и управление отображением hamburgerElem
    function checkWindowSize() {
        var windowWidth = window.innerWidth;

        // Проверка размера окна и управление отображением hamburgerElem
        if (windowWidth >= 769) {
            // Показываем и удаляем стили hamburgerElem при ширине окна 769px и более
            hamburgerElem.style.display = "flex";
            hamburgerElem.style.removeProperty('display');
        } else {
            // Скрываем и удаляем стили hamburgerElem при ширине окна менее 769px
            hamburgerElem.style.display = "none";
            hamburgerElem.style.removeProperty('display');
        }
    }

    function showModal() {
        hidden.style.display = "block";
        background.style.background = "none";
        document.body.style.overflow = "hidden";
        hamburgerElem.style.display = "none";
    }

    function hideModal(e) {
        if (e.target == hidden || e.target == close) {
            hidden.style.display = 'none';
            player.stopVideo();
            document.body.style.overflow = "auto";
            background.style.background = "url(../img/bg/video/bg-video.png) center center/cover no-repeat";
            // hamburgerElem.style.display = "flex";
            checkWindowSize();
        }
    }

    let player;

    function createPlayer() {
        player = new  YT.Player("frame", {
            height: "100%",
            width: "100%",
            videoId: "D9syciL3Xsg"
        })
    }

    function init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    btn.addEventListener("click", () => {

        if (document.querySelector("iframe#frame")) {
            hidden.style.display = "block";
        } else {
            const path = btn.getAttribute("data-url");
            createPlayer(path);
        }
        showModal();
    });
    window.addEventListener("click", hideModal);
    init();
}

export default playVideo;