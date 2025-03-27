document.addEventListener('DOMContentLoaded', () => {
    const drawerItems = document.querySelectorAll('.drawer-item');
    
    // Remove last-clicked class from all items when clicking anywhere else
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.drawer-item')) {
            document.querySelectorAll('.drawer-item.last-clicked').forEach(item => {
                item.classList.remove('last-clicked');
            });
        }
    });
    
    drawerItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the container this item belongs to
            const container = item.closest('.drawer-container');
            
            // Remove last-clicked class from all items
            document.querySelectorAll('.drawer-item.last-clicked').forEach(i => {
                i.classList.remove('last-clicked');
            });
            
            // Remove active class from all items in this container
            container.querySelectorAll('.drawer-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Remove active class from all panels in this container
            container.querySelectorAll('.drawer-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            
            // Add active and last-clicked classes to clicked item
            item.classList.add('active', 'last-clicked');
            
            // Show corresponding panel
            const targetId = item.getAttribute('data-target');
            const targetPanel = container.querySelector(`#${targetId}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}); 