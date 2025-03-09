document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
  
    
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    
    const carousel = document.querySelector('.carousel');
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    let counter = 0;
    const total = carouselImages.length;
    const visible = 3;
  
    function updateCarousel() {
      const imageWidth = carousel.clientWidth / visible;
      carouselSlide.style.transform = 'translateX(' + (-counter * imageWidth) + 'px)';
  
      
      carouselImages.forEach(img => img.classList.remove('active'));
  
    
      if (carouselImages[counter]) {
        carouselImages[counter].classList.add('active');
      }
  
      
      if (counter === 0) {
        prevBtn.classList.add('disabled');
      } else {
        prevBtn.classList.remove('disabled');
      }
  
      
      if (counter >= total - visible) {
        nextBtn.classList.add('disabled');
      } else {
        nextBtn.classList.remove('disabled');
      }
    }
  
    updateCarousel();
  
    nextBtn.addEventListener('click', () => {
      if (counter < total - visible) {
        counter++;
        updateCarousel();
      }
    });
  
    prevBtn.addEventListener('click', () => {
      if (counter > 0) {
        counter--;
        updateCarousel();
      }
    });
  
    window.addEventListener('resize', updateCarousel);
  
    
    const contatoSlides = document.querySelectorAll('.contato-slide');
    const contatoPrevBtn = document.querySelector('.contato-prev');
    const contatoNextBtn = document.querySelector('.contato-next');
    let contatoIndex = 0;
  
    function showContatoSlide(index) {
      contatoSlides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
      });
    }
  
    function nextContatoSlide() {
      contatoIndex = (contatoIndex + 1) % contatoSlides.length;
      showContatoSlide(contatoIndex);
    }
  
    function prevContatoSlide() {
      contatoIndex = (contatoIndex - 1 + contatoSlides.length) % contatoSlides.length;
      showContatoSlide(contatoIndex);
    }
  
    contatoNextBtn.addEventListener('click', nextContatoSlide);
    contatoPrevBtn.addEventListener('click', prevContatoSlide);
  
    setInterval(nextContatoSlide, 2000);
  
    showContatoSlide(contatoIndex);
  });
  