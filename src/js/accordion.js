document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');
    let lastClickedAccordion = null;

    // Handle clicks on accordions
    accordions.forEach(accordion => {
        // Set initial states
        const content = accordion.nextElementSibling;
        accordion.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');

        accordion.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from firing
            const isExpanded = accordion.getAttribute('aria-expanded') === 'true';
            const content = accordion.nextElementSibling;
            
            // Toggle states
            accordion.setAttribute('aria-expanded', !isExpanded);
            content.setAttribute('aria-hidden', isExpanded);

            // Remove last-clicked class from previous accordion
            if (lastClickedAccordion && lastClickedAccordion !== accordion) {
                lastClickedAccordion.classList.remove('last-clicked');
            }

            // Add last-clicked class to current accordion
            accordion.classList.add('last-clicked');
            lastClickedAccordion = accordion;

            // Handle focus indicator
            if (!isExpanded) {
                accordion.focus();
            }
        });
    });

    // Handle clicks outside accordions
    document.addEventListener('click', (e) => {
        // Check if click was outside any accordion
        const clickedAccordion = e.target.closest('.accordion-header');
        if (!clickedAccordion && lastClickedAccordion) {
            lastClickedAccordion.classList.remove('last-clicked');
            lastClickedAccordion = null;
        }
    });
}); 