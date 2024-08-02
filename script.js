$(document).ready(function() {
    // Animate the circular progress bar
    $('.progress-circle-fg').css('stroke-dashoffset', '0');

    // Hide loader and show content after a few seconds
    setTimeout(function() {
        $('#loader').fadeOut('slow', function() {
            $('#content').fadeIn('slow');
        });
    }, 3000); // Adjust the timeout duration as needed

    // Change navbar background color on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.nav-container').addClass('solid-nav');
        } else {
            $('.nav-container').removeClass('solid-nav');
        }
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Testimonials slider functionality
    var testimonials = $('.testimonial');
    var currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.hide();
        $(testimonials[index]).show();
    }

    $('.next').click(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    $('.prev').click(function() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    showTestimonial(currentTestimonial);

    // Scroll to top button functionality
    var scrollToTopBtn = $('#scroll-to-top-btn');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            scrollToTopBtn.fadeIn();
        } else {
            scrollToTopBtn.fadeOut();
        }
    });

    scrollToTopBtn.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});

$(window).on('load', function() {
    var map = L.map('map').setView([40.785091, -73.968285], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    L.marker([40.785091, -73.968285]).addTo(map);

    // Directions buttons
    $('#walking-directions').click(function() {
        window.open('https://www.google.com/maps/dir/?api=1&destination=40.785091,-73.968285&travelmode=walking', '_blank');
    });

    $('#driving-directions').click(function() {
        window.open('https://www.google.com/maps/dir/?api=1&destination=40.785091,-73.968285&travelmode=driving', '_blank');
    });

    $('#public-transport-directions').click(function() {
        window.open('https://www.google.com/maps/dir/?api=1&destination=40.785091,-73.968285&travelmode=transit', '_blank');
    });
});
