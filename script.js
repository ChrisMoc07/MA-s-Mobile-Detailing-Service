// Optional JavaScript for small interactive features
// Example: Smooth scrolling for anchor links, form submission handling, etc.

// Smooth scrolling for anchor links
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Example form submission (client-side only)
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  // Here you can add your own form handling logic, 
  // or integrate with a backend to send the data.
});
