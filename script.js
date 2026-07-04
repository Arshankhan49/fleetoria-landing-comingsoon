document.addEventListener('DOMContentLoaded', () => {



    // Form submission simulation
    const form = document.getElementById('notify-form');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = '<span class="btn-text">PROCESSING...</span>';
            btn.style.opacity = '0.8';
            btn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                messageDiv.textContent = 'Thank you! You will be notified when we launch.';
                messageDiv.className = 'form-message success';
                emailInput.value = '';
                
                // Reset button
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                btn.disabled = false;
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    messageDiv.textContent = '';
                    messageDiv.className = 'form-message';
                }, 5000);
                
            }, 1500);
        }
    });
});
