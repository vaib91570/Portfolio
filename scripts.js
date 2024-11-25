// Open Modal Function for Project Details
function openModal(project) {
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    
    const projectDescriptions = {
        ecommerce: `
            <h3>E-commerce Website</h3>
            <p>This project involves creating an e-commerce website with features like product management, an admin panel for managing sellers and products, and shopping cart functionality.</p>
        `,
        voip: `
            <h3>VoIP Call Project</h3>
            <p>This VoIP call project uses the MERN stack, Vite, and TailwindCSS to create a modern and scalable platform for voice and video calling.</p>
        `,
        crypto: `
            <h3>Crypto Project</h3>
            <p>Real-time cryptocurrency platform with login, sign-up functionalities, and market tracking features.</p>
        `,
        portfolio: `
            <h3>Portfolio Website</h3>
            <p>Professional, unique developer-themed portfolio showcasing projects and skills.</p>
        `,
        interview: `
            <h3>Interview Allocation System</h3>
            <p>System designed for efficient allocation of candidates to interview panels.</p>
        `,
        "typing-game": `
            <h3>Interactive Typing Game</h3>
            <p>Gamified typing experience with multiple difficulty levels, sound effects, and leaderboards.</p>
        `,
        cng: `
            <h3>CNG Compliance Verification Software</h3>
            <p>Startup project ensuring CNG tank compliance with fuel station management features.</p>
        `
    };

    modalBody.innerHTML = projectDescriptions[project];
    modal.style.display = "block";
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById("project-modal");
    modal.style.display = "none";
}

// Close Modal When Clicking Outside
window.onclick = function(event) {
    const modal = document.getElementById("project-modal");
    if (event.target === modal) {
        closeModal();
    }
}

// Check and apply the saved theme preference on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        document.getElementById('theme-toggle').textContent = savedTheme === 'dark-theme' ? '🌙' : '☀️';
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-toggle');
    
    body.classList.toggle('light-theme');
    const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    localStorage.setItem('theme', currentTheme); // Save preference
    
    themeIcon.textContent = currentTheme === 'dark-theme' ? '🌙' : '☀️';
}
