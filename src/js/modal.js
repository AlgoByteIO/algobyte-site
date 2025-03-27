// Single, clean implementation for modal functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log("Modal script loaded and running");
    
    // Get modal elements
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const closeButton = document.querySelector('.close');
    
    if (!modal || !modalOpen || !closeButton) {
        console.error("Modal elements not found on this page");
        return;
    }
    
    console.log("Modal elements found successfully");
    
    // Open modal
    modalOpen.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Modal open clicked");
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal with button
    closeButton.addEventListener('click', () => {
        console.log("Modal close clicked");
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log("Modal background clicked");
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            console.log("Escape pressed, closing modal");
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 