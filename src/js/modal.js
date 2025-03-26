// Modal functionality
const initModal = () => {
    const modal = document.getElementById("modal");
    const modalOpen = document.getElementById("modal-open");
    const closeBtn = document.getElementsByClassName("close")[0];

    modalOpen.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
};

// Initialize modal when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const closeButton = document.querySelector('.close');

    // Modal functionality
    modalOpen.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only trigger if Alt key is pressed with a number
        if (e.altKey && !e.ctrlKey && !e.metaKey) {
            const key = e.key;
            const links = document.querySelectorAll('.nav-links a[data-key]');
            
            links.forEach(link => {
                if (link.getAttribute('data-key') === key) {
                    e.preventDefault();
                    if (link.id === 'modal-open') {
                        modal.style.display = 'block';
                    } else {
                        link.click();
                    }
                }
            });
        }

        // Close modal with Escape key
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}); 