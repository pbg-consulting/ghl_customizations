/* ================================================
   PBG CONSULTING - GREEN INSURANCE LOGIN SCRIPT
   Protected File - Key: PBG-GREEN-INSURANCE-LOGIN-001
   ================================================ */

(function() {
  'use strict';
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    console.log('🔒 PBG Consulting - Green Insurance Login Initialized');
    
    // Get the login form
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
      // Add form submission handling
      loginForm.addEventListener('submit', function(e) {
        console.log('Form submitting to GHL CRM...');
        
        // Add loading state to button
        const submitBtn = loginForm.querySelector('.sign-in-btn');
        if (submitBtn) {
          submitBtn.textContent = 'SIGNING IN...';
          submitBtn.disabled = true;
        }
        
        // Let the form submit naturally to GHL
        // Don't prevent default - we want GHL to handle the authentication
      });
      
      // Add input validation styling
      const inputs = loginForm.querySelectorAll('input');
      inputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
          e.preventDefault();
          this.classList.add('error');
        });
        
        input.addEventListener('input', function() {
          this.classList.remove('error');
        });
      });
    }
    
    // Add subtle floating animation to logo
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.style.animation = 'float 3s ease-in-out infinite';
      
      // Add the animation keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  // Add error styling for invalid inputs
  const errorStyle = document.createElement('style');
  errorStyle.textContent = `
    .form-group input.error {
      border-color: #ff4444 !important;
      background: rgba(255, 68, 68, 0.1) !important;
    }
  `;
  document.head.appendChild(errorStyle);
  
})();
