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
document.addEventListener('DOMContentLoaded', initModal); 