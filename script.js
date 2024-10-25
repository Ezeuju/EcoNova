document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simulate a form submission (You can replace this with actual backend integration)
        setTimeout(() => {
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            contactForm.reset();
        }, 1000);
    });
});
