const card = () => {
    document.querySelectorAll('.providing__arrow').forEach(arrow => {
        arrow.addEventListener('click', (event) => {
            const item = event.currentTarget.closest('.providing__item');
            const content = item.querySelector('.providing__item-content');
            const hidden = item.querySelector('.providing__item-hidden');
    
            if (hidden.classList.contains('providing__item-hidden-active')) {
                content.classList.add('providing__item-content-active');
                hidden.classList.remove('providing__item-hidden-active');
            } else {
                content.classList.remove('providing__item-content-active');
                hidden.classList.add('providing__item-hidden-active');
            }
        });
    });
};

export default card;