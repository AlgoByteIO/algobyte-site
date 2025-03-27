// Use the Font Loading API to control font loading
document.addEventListener('DOMContentLoaded', function() {
    if ('fonts' in document) {
        // Load all fonts before displaying content
        Promise.all([
            document.fonts.load('1em CustomFont1'),
            document.fonts.load('1em CustomFont2'),
            // Add other fonts as needed
        ]).then(() => {
            // Add class to body once fonts are loaded
            document.body.classList.add('fonts-loaded');
            
            // Store in session storage to avoid reloading on page navigation
            sessionStorage.setItem('fontsLoaded', 'true');
        });
    }
    
    // Immediately apply fonts-loaded class if we've already loaded fonts in this session
    if (sessionStorage.getItem('fontsLoaded')) {
        document.body.classList.add('fonts-loaded');
    }
}); 