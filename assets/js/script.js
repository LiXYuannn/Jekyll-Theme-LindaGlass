// assets/js/script.js 文件内容

document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('announcement-icon');
    const panel = document.getElementById('announcement-panel');
    const closeBtn = document.querySelector('.close-btn');

    if (icon && panel) {
        icon.addEventListener('click', function() {
            panel.classList.toggle('active');
        });

        closeBtn.addEventListener('click', function() {
            panel.classList.remove('active');
        });

        document.addEventListener('click', function(event) {
            const isClickInsideContainer = icon.contains(event.target) || panel.contains(event.target);
            if (!isClickInsideContainer && panel.classList.contains('active')) {
                panel.classList.remove('active');
            }
        });
    }
});