const modals = () => {
    const overlay = document.querySelector('.overlay');
    const consultationModal = document.querySelector('#consultation');
    const thanksModal = document.querySelector('#thanks');
    const consultationOpenBtn = document.querySelector(".providing__btn");
    const closeBtns = document.querySelectorAll('.modal__close');
    const hamburgerElem = document.querySelector(".hamburger");

    

    function openModal(modal) {
        overlay.style.display = 'block';
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        const form = modal.querySelector('.modal__form');
        if (form) {
            form.reset();
        }
        hamburgerElem.style.display = "none";
    }

    function closeModal(modal) {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        hamburgerElem.style.display = "flex";
    }

    consultationOpenBtn.addEventListener('click', () => {
        openModal(consultationModal);
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(consultationModal);
            closeModal(thanksModal);
        });
    });

    const consultationForm = consultationModal.querySelector('.modal__form');
    const consultationBtn = consultationForm.querySelector('.modal__btn');

    consultationBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (consultationForm.checkValidity()) {
            closeModal(consultationModal);
            openModal(thanksModal);
            consultationForm.reset();
            setTimeout(() => {
                closeModal(thanksModal);
            }, 5000);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && overlay.style.display === "block") {
            closeModal(consultationModal);
            closeModal(thanksModal);
        }
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(consultationModal);
            closeModal(thanksModal);
        }
    });

};

export default modals;