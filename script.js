document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', function() {
        const body = this.nextElementSibling;
        const isVisible = body.style.display === 'block';

        // Hide all bodies
        document.querySelectorAll('.faq-body').forEach(el => el.style.display = 'none');

        // Toggle current body
        body.style.display = isVisible ? 'none' : 'block';
    });
});
