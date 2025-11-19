(function() {
    // Create floating button
    const floatingButton = document.createElement('div');
    floatingButton.id = 'greenQuoteButton';
    floatingButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
    `;
    floatingButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #6bc24a, #5aa63d);
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 9999;
        transition: transform 0.3s;
    `;
    floatingButton.onmouseover = () => floatingButton.style.transform = 'scale(1.1)';
    floatingButton.onmouseout = () => floatingButton.style.transform = 'scale(1)';
    
    // Load form HTML from your server
    floatingButton.onclick = async () => {
        const modal = document.getElementById('greenQuoteModal');
        if (modal) {
            modal.style.display = 'flex';
            return;
        }
        
        try {
            const response = await fetch('https://api.gopbgconsulting.com/green-insurance/quote-form.html');
            const html = await response.text();
            const div = document.createElement('div');
            div.innerHTML = html;
            document.body.appendChild(div);
        } catch(e) {
            console.error('Failed to load form:', e);
        }
    };
    
    document.body.appendChild(floatingButton);
})();
