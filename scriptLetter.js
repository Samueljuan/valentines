document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');
    let isOpen = false;

    function openLetter() {
        envelope.classList.add('open');
        setTimeout(() => {
            modal.classList.add('active');
            overlay.classList.add('active');
        }, 400);
        isOpen = true;
    }

    function closeLetter() {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        setTimeout(() => {
            envelope.classList.remove('open');
        }, 300);
        isOpen = false;
    }

    envelope.addEventListener('click', () => {
        if (!isOpen) {
            openLetter();
        }
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLetter();
    });

    overlay.addEventListener('click', () => {
        if (isOpen) {
            closeLetter();
        }
    });
});