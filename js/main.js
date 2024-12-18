// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.getElementsByTagName('a');
    for (const link of mobileLinks) {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
        }
    });
});

// slider 

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('timeline-slider');
    const slides = document.querySelectorAll('.roadmap-slide');
    const dots = document.querySelectorAll('.timeline-dot');
    const numSlides = slides.length;

    function updateContent(value) {
        // Calculate the proportional position of the slider
        const sliderRange = slider.max - slider.min;
        const proportionalPosition = (value - slider.min) / sliderRange;
        
        // Determine the index based on the slider's position
        let index;
        if (proportionalPosition < 0.45) {
            // First slide: 0-45%
            index = 0;
        } else if (proportionalPosition >= 0.45 && proportionalPosition < 0.90) {
            // Second slide: 45-90%
            index = 1;
        } else {
            // Last slide: 90-100%
            index = numSlides - 1;
        }

        // Ensure index is within valid range
        index = Math.max(0, Math.min(index, numSlides - 1));

        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i <= index);
        });
    }

    // Slider input event
    slider.addEventListener('input', function() {
        updateContent(this.value);
    });

    // Dot click event
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const sliderValue = index * (slider.max - slider.min) / (numSlides - 1) + slider.min;
            slider.value = sliderValue;
            updateContent(sliderValue);
        });
    });

    // Initialize to first slide
    updateContent(slider.min);
});