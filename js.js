document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('a[href="#contact"]');
    
    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      
      const contactSection = document.getElementById('contact');
      const contactSectionPosition = contactSection.offsetTop;
      
      window.scrollTo({
        top: contactSectionPosition,
        behavior: 'smooth'
      });
    });
  });