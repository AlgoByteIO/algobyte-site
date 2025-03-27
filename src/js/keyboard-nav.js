// This is a dedicated keyboard navigation handler
console.log("Keyboard navigation script loaded");

// Run immediately without waiting for DOMContentLoaded
(function() {
    // Function to handle keyboard shortcuts
    function handleKeyboardShortcuts(event) {
        // Log all key presses to help debug
        console.log(`Key pressed: ${event.key}, Alt: ${event.altKey}, Ctrl: ${event.ctrlKey}, Meta: ${event.metaKey}`);
        
        // Only proceed if Alt key is pressed alone (no Ctrl or Meta)
        if (event.altKey && !event.ctrlKey && !event.metaKey) {
            let handled = true;
            
            switch (event.key) {
                case '1':
                    console.log("Alt+1 detected - navigating to Office");
                    window.location.href = '/';
                    break;
                case '2':
                    console.log("Alt+2 detected - navigating to Products");
                    window.location.href = '/products';
                    break;
                case '3':
                    console.log("Alt+3 detected - navigating to Catalog");
                    window.location.href = '/catalog';
                    break;
                case '0':
                    console.log("Alt+0 detected - opening modal");
                    const modal = document.getElementById('modal');
                    const modalOpen = document.getElementById('modal-open');
                    
                    if (modalOpen) {
                        modalOpen.click();
                    } else if (modal) {
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                    } else {
                        console.error("Modal elements not found");
                        handled = false;
                    }
                    break;
                default:
                    console.log("Unhandled Alt combination");
                    handled = false;
            }
            
            if (handled) {
                // Only prevent default if we handled the key
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
    
    // Register the event handler
    console.log("Adding keydown event listener for keyboard navigation");
    document.addEventListener('keydown', handleKeyboardShortcuts);
})();

// Alternative keyboard shortcuts using just number keys (without Alt)
console.log("Keyboard navigation script loaded");

(function() {
    function handleNumberKeys(event) {
        // Only trigger on number keys when not in an input field
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            console.log(`Key pressed: ${event.key}`);
            
            switch (event.key) {
                case '1':
                    console.log("Key 1 pressed - navigating to Office");
                    window.location.href = '/';
                    event.preventDefault();
                    break;
                case '2':
                    console.log("Key 2 pressed - navigating to Products");
                    window.location.href = '/products';
                    event.preventDefault();
                    break;
                case '3':
                    console.log("Key 3 pressed - navigating to Catalog");
                    window.location.href = '/catalog';
                    event.preventDefault();
                    break;
                case '0':
                    console.log("Key 0 pressed - opening modal");
                    const modalOpen = document.getElementById('modal-open');
                    if (modalOpen) {
                        modalOpen.click();
                        event.preventDefault();
                    }
                    break;
            }
        }
    }
    
    document.addEventListener('keydown', handleNumberKeys);
})(); 