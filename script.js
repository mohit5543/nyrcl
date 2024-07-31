$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.first-container').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.nav-container').addClass('solid-nav');
        } else {
            $('.nav-container').removeClass('solid-nav');
        }

    });
});

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Collect form data
    const formData = new FormData(event.target);

    // Process the form data (you can send it to a server or handle it as needed)
    console.log('Form data submitted:', Object.fromEntries(formData.entries()));

    // Show alert
    alert('Your form is submitted. A link has been sent to your email for payment and other info. Thank you!');
}

//testimonial 
document.addEventListener('DOMContentLoaded', function() {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('button.prev');
    const nextButton = document.querySelector('button.next');
    const paginationButtons = document.querySelectorAll('.testimonials-pagination button');
    let currentIndex = 0;
    let autoSlide;

    function showTestimonial(index) {
        testimonialsContainer.style.transform = `translateX(-${index * 100}%)`;
        paginationButtons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });
    }

    function startAutoSlide() {
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 4000); // Change slide every 4 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
        startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
        startAutoSlide();
    });

    paginationButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index;
            showTestimonial(currentIndex);
            startAutoSlide();
        });
    });

    startAutoSlide();
});

//maps
document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([40.785091, -73.968285], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.785091, -73.968285]).addTo(map)
        .bindPopup('Central Park Cricket Fields')
        .openPopup();
});

document.getElementById('walking-directions').addEventListener('click', function() {
    window.open('https://www.google.com/maps/dir/?api=1&destination=Central+Park%2C+New+York%2C+NY&travelmode=walking', '_blank');
});

document.getElementById('driving-directions').addEventListener('click', function() {
    window.open('https://www.google.com/maps/dir/?api=1&destination=Central+Park%2C+New+York%2C+NY&travelmode=driving', '_blank');
});

document.getElementById('public-transport-directions').addEventListener('click', function() {
    window.open('https://www.google.com/maps/dir/?api=1&destination=Central+Park%2C+New+York%2C+NY&travelmode=transit', '_blank');
});

//smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-controls a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Join Now button smooth scroll
    document.getElementById('join-now-btn').addEventListener('click', function() {
        document.getElementById('join').scrollIntoView({ behavior: 'smooth' });
    });
});

//up button
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-controls a');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    
    // Smooth scrolling for navbar links
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Smooth scrolling for "Join Now" button
    document.getElementById('join-now-btn').addEventListener('click', function() {
        document.getElementById('join').scrollIntoView({ behavior: 'smooth' });
    });

    // Show or hide the "scroll to top" button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
