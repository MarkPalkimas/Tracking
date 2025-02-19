document.addEventListener('DOMContentLoaded', function() {
    const neonContainer = document.getElementById('neon-container');
    
    // Add the neon glow div
    const glow = document.createElement('div');
    glow.className = 'neon-glow';
    neonContainer.appendChild(glow);

    // Mouse move event to adjust glow position
    neonContainer.addEventListener('mousemove', function(event) {
        const rect = neonContainer.getBoundingClientRect();
        const x = event.clientX - rect.left; //x position within the element.
        const y = event.clientY - rect.top;  //y position within the element.
        
        // Update glow position
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, #0ff, transparent 70%)`;
    });
});