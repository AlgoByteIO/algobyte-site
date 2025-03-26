document.addEventListener('DOMContentLoaded', () => {
    const drawerItems = document.querySelectorAll('.drawer-item');
    
    drawerItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the container this item belongs to
            const container = item.closest('.drawer-container');
            
            // Remove active class from all items in this container
            container.querySelectorAll('.drawer-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Remove active class from all panels in this container
            container.querySelectorAll('.drawer-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Show corresponding panel
            const targetId = item.getAttribute('data-target');
            const targetPanel = container.querySelector(`#${targetId}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}); 