document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        if (themeToggle) { // Check if themeToggle exists
            const icon = themeToggle.querySelector('i');
            if (icon) { // Check if icon exists
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                themeToggle.textContent = '☀️'; // Fallback text for icon if not found
            }
        }
    } else { // Default to dark theme if no preference or 'dark'
        body.classList.add('dark-theme');
        if (themeToggle) themeToggle.textContent = '🌓'; // Default icon/text
    }

    if (themeToggle) { // Only add listener if the element exists
        themeToggle.addEventListener('click', () => {
            // Toggle theme classes
            body.classList.toggle('dark-theme');
            body.classList.toggle('light-theme');

            // Toggle icon/text
            if (body.classList.contains('light-theme')) {
                const icon = themeToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    themeToggle.textContent = '☀️';
                }
                localStorage.setItem('theme', 'light');
            } else {
                const icon = themeToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                } else {
                    themeToggle.textContent = '🌓';
                }
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Smooth Scrolling for Navigation (Index page only)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header Scroll Effect (Index page only)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) { // Ensure header exists
            if (window.scrollY > 100) {
                header.style.padding = '1rem 5%';
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '1.5rem 5%';
                header.style.boxShadow = 'none';
            }
        }
    });

    // --- Form Handling (General alerts for now) ---

    // Handle video upload (from videos.html)
    const videoForm = document.querySelector("#videos form");
    if (videoForm) {
        videoForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const title = videoForm.querySelector("input[type='text']").value;
            const url = videoForm.querySelector("input[type='url']").value;
            if (title && url) alert(`New video added:\nTitle: ${title}\nURL: ${url}`);
            videoForm.reset();
        });
    }

    // Handle picture upload (from pictures.html)
    const pictureForm = document.getElementById('upload-form'); // Use ID for pictures form
    if (pictureForm) {
        pictureForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const caption = document.getElementById('caption').value;
            const fileInput = document.getElementById('image-upload');

            if (!fileInput.files.length) {
                alert('Please select an image to upload');
                return;
            }

            // In a real implementation, you would handle the file upload to a server
            alert(`Image uploaded successfully with caption: "${caption}"`);

            // Reset form
            pictureForm.reset();
        });
    }

    // Handle blog post (from blog.html)
    const blogForm = document.querySelector("#blog form");
    if (blogForm) {
        blogForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const title = blogForm.querySelector("input[type='text']").value;
            const content = blogForm.querySelector("textarea").value;
            if (title && content) alert(`New blog posted:\nTitle: ${title}\nContent: ${content}`);
            blogForm.reset();
        });
    }

    // Handle contact form (from contact.html)
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = contactForm.querySelector("input[type='text']").value;
            const email = contactForm.querySelector("input[type='email']").value;
            const message = contactForm.querySelector("textarea").value;
            if (name && email && message) alert(`Message sent by ${name} (${email}):\n${message}`);
            contactForm.reset();
        });
    }
});