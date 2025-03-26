document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(accordion => {
        // Set initial states
        const content = accordion.nextElementSibling;
        accordion.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');

        accordion.addEventListener('click', () => {
            const isExpanded = accordion.getAttribute('aria-expanded') === 'true';
            const content = accordion.nextElementSibling;
            
            // Toggle states
            accordion.setAttribute('aria-expanded', !isExpanded);
            content.setAttribute('aria-hidden', isExpanded);

            // Handle focus indicator
            if (!isExpanded) {
                accordion.focus();
            }
        });
    });
}); 